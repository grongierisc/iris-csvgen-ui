Include Grongier.Rest.Async

Class Grongier.Rest.Async.Utils [ Abstract ]
{

/// Global to use for locking to ensure the same job if triggered multiple times, executes
/// one at a time. <br />
Parameter LockGlobal As STRING [ Final, Internal ] = "^CacheTemp.Grongier.Rest.AsyncJobL";

/// PPG in which to track references to things during IO redirection. <br />
Parameter PPG As STRING [ Final, Internal ] = "^||CacheTemp.Grongier.Rest.AsyncPPG";

/// Subscript in the PPG that contains the job id for a given process. <br />
Parameter JobIdSubscript As STRING [ Final, Internal ] = "JobId";

/// Does validation on the method that will be run in the background. <br />
/// @Argument	pClassname		Class that contains method to run in background. <br />
/// @Argument	pMethodName		Method to run in background. <br />
ClassMethod ValidateMethod(pClassname As %Dictionary.Classname, pMethodName As %Dictionary.Identifier) [ Internal ]
{
	Set baseErrorString = "Method "_$$$QUOTE(pMethodName)_" in class "_$$$QUOTE(pClassname)_" is invalid. "
	#define ThrowError(%text) $$$ThrowStatus($$$ERROR($$$GeneralError, baseErrorString_%text))
	#define GetMethodFeature(%feature) $$$comMemberKeyGet(pClassname, $$$cCLASSmethod, pMethodName, %feature)
	Set returnType = $$$GetMethodFeature($$$cMETHreturntype)
	// MUST return JSON
	If (returnType '= "") && '$ClassMethod(returnType, "%Extends", "%Library.DynamicAbstractObject") {
		$$$ThrowError(baseErrorString_"Return type "_$$$QUOTE(returnType)_" must extend %Library.DynamicAbstractObject")
	}
	// Iterate method parameters and each one must be a datatype
	Set formalSpecParsed = $$$GetMethodFeature($$$cMETHformalspecparsed)
	Set ptr = 0
	While $ListNext(formalSpecParsed, ptr, parameter) {
		Set $ListBuild(name, type, callType, default) = parameter
		// Ensure call type isn't by reference
		If (callType = "*") || (callType = "&") {
			$$$ThrowError("Method Parameter "_$$$QUOTE(name)_" is passed by reference and cannot be run in a background job.")
		}
		// Ensure it is a datatype
		Set isDataType = ($$$comClassKeyGet(type, $$$cCLASSclasstype) = $$$cCLASSCLASSTYPEDATATYPE)
		If 'isDataType {
			$$$ThrowError("Method Parameter "_$$$QUOTE(name)_" must be a data type.")
		}
	}
}

/// This is the method that is run in the background, to call <var>pMethodName</var> in
/// <var>pClassname</var> with arguments <var>pArgumentList</var>. The result and other
/// information about the background job is recorded in an instance of
/// <class>Grongier.Rest.Async.JobRecord</class>. <br />
/// @Argument	pClassname		Class that contains method to run in background. <br />
/// @Argument	pMethodName		Method to run in background. <br />
/// @Argument	pArgumentsList	$ListBuild list of arguments to pass to method. <br />
ClassMethod DoBackgroundJob(pClassname As %Dictionary.Classname, pMethodName As %Dictionary.Identifier, pArgumentList As %Library.List) [ Internal ]
{
	#dim jobRecord As Grongier.Rest.Async.JobRecord
	// Attempt to create a job record and send its key immediately to the parent job
	Try {
		Set jobRecord = ##class(Grongier.Rest.Async.JobRecord).%New(pClassname, pMethodName, pArgumentList)
		$$$ThrowOnError(jobRecord.%Save())
		Set jobExists = $System.Event.Signal($ZParent, $ListBuild("key", ..GetJobKeyFromJobId(jobRecord.%Id())))
		If 'jobExists {
			$$$ThrowStatus($$$ERROR($$$GeneralError, "Should not have reached here! This implies job does not exist"))
		}
	} Catch ex {
		Do $System.Event.Signal($ZParent, $ListBuild("error", ex.AsStatus()))
		Return
	}
	
	// Actually start running the job
	// Any errors other than those from calling the method are to be logged in the application error log
	Try {
		// Convert list to subscripted array
		Set pointer = 0
		While $ListNext(pArgumentList, pointer, argument) {
			Set argumentArray($Increment(argumentArray)) = argument
		}
		
		// Lock this specific method call so that it is made exactly once at a given time
		Set lockManager = ##class(Grongier.Rest.Async.LockManager).%New()
		Set lockGlobal = ..GetLockGlobalFromMethodCall(pClassname, pMethodName, pArgumentList)
		Set sc = lockManager.Lock(lockGlobal)
		$$$ThrowOnError(sc)
		
		Set jobRecord.Status = $$$JobRunning
		$$$ThrowOnError(jobRecord.%Save())
				
		// Call method and error in method isn't thrown but is stored
		Do ..RunMethodWithIORedirection(jobRecord, pClassname, pMethodName, argumentArray...)
		
		Set jobRecord.EndTime = $ZDateTime($ZTimestamp, 3)
		Set sc = jobRecord.%Save()
		$$$ThrowOnError(sc)
	} Catch ex {
		Do ex.Log()
		Set jobRecord.Status = $$$JobInternalError
		Set sc = jobRecord.%Save()
		$$$LogToApplicationErrorLog(sc)
	}
}

/// Run the provided method call with I/O redirection, storing the result/error in <var>pJobRecord</var>. <br />
/// Updates the Status in the job record once the method call completes. <br />
/// Throws any errors during configuration of I/O redirection and stores any errors
/// thrown during the job into the job record. <br />
/// @Argument	pJobRecord		Instance of <class>Grongier.Rest.Async.JobRecord</class>. <br />
/// @Argument	pClassname		Class that contains method to run in background. <br />
/// @Argument	pMethodName		Method to run in background. <br />
/// @Argument	pArguments...	Arguments to pass to method. <br />
ClassMethod RunMethodWithIORedirection(pJobRecord As Grongier.Rest.Async.JobRecord, pClassname As %Dictionary.Classname, pMethodName As %Dictionary.Identifier, pArguments...) [ Final, Internal, Private ]
{
	#dim resultJson As %Library.DynamicAbstractObject
	Set resultJson = $$$NULLOREF
	Set resultStream = ##class(%Stream.GlobalCharacter).%New()
	Set redirected = 0
	Set wasRedirected = 0
	Set oldMnemonic = ""
	Set sc = $$$OK
	Try {
		Set initialIO = $IO
		Set wasRedirected = ##class(%Library.Device).ReDirectIO()
		Set oldMnemonic = ##class(%Library.Device).GetMnemonicRoutine()
		// Use this class as the mnemonic space so I/O redirects are to entry points here
		Use initialIO::("^"_$ZNAME)
		Set redirected = 1
		Do ##class(%Library.Device).ReDirectIO(1)
		// Save job record once to ensure ID is available
		$$$ThrowOnError(pJobRecord.%Save())
		// Store ID in process private global so that it can be accessed during redirection
		Set @..#PPG@(..#JobIdSubscript) = pJobRecord.%Id()
		// Have try catch around actual running of the job because if there are any errors here then
		// status needs to be $$$JobError
		Try {
			// Run method
			Set returnType = $$$comMemberKeyGet(pClassname, $$$cCLASSmethod, pMethodName, $$$cMETHreturntype)
			If (returnType = "") {
				Do $ClassMethod(pClassname, pMethodName, pArguments...)
			} Else {
				Set resultJson = $ClassMethod(pClassname, pMethodName, pArguments...)
			}
			Set pJobRecord.Status = $$$JobComplete
		} Catch ex {
			Set sc = ex.AsStatus()
			Set pJobRecord.Status = $$$JobError
			Set resultJson = {
				"error": {
					"code": ($System.Status.GetErrorCodes(sc)),
					"message": ($System.Status.GetErrorText(sc))
				}
			}
		}
		If $IsObject(resultJson) && resultJson.%IsA("%Library.DynamicAbstractObject") {
			Do resultJson.%ToJSON(resultStream)
		}
		Set pJobRecord.Result = resultStream
		$$$ThrowOnError(pJobRecord.%Save())
	} Catch ex {
		Set sc = ex.AsStatus()
	}
	
	// If redirected now, return to initial IO device and switch of IO redirection
	If redirected && ##class(%Library.Device).ReDirectIO(0) {
		Use initialIO
	}
	// If old mnemonic device existed, use it
	If (oldMnemonic '= "") {
		Set oldMnemonic = "^"_oldMnemonic
		Use initialIO::(oldMnemonic)
	}
	// Redirect back to I/O device on type 1 device if previous redirection existed
	If wasRedirected {
		Do ##class(%Library.Device).ReDirectIO(1)
	}
	
	// Throw errors once I/O redirection has been restored
	$$$ThrowOnError(sc)
}

/// This method doesn't do any work and merely serves as an entry point for I/O redirection. <br />
ClassMethod Redirects() [ Internal, Private, ProcedureBlock = 0 ]
{
	Quit
#; Public entry points for redirection
wstr(s)	Do write(s)
		Quit
wchr(a) Do write($char(a))
		Quit
wnl 	Do write($$$EOL)
		Set $X = 0
		Quit
wff 	Do wnl Quit
wtab(n) New tab
		Set tab = $Justify("", $Select(n > $X: (n - $X), 1: 0))
		Do write(tab)
		Quit
write(str)
		New jobRecord, ex, sc, id, global, subscript
		Try {
			// Cannot use class parameters with ..# syntax. Must use by calling class because ProcedureBlock = 0
			Set global = ##class(Grongier.Rest.Async.Utils).#PPG
			Set subscript = ##class(Grongier.Rest.Async.Utils).#JobIdSubscript
			If $Data(@global@(subscript), id)#2 {
				Set jobRecord = ##class(Grongier.Rest.Async.JobRecord).%OpenId(id, , .sc)
				$$$ThrowOnError(sc)
				$$$ThrowOnError(jobRecord.WrittenOutput.Write(str))
				$$$ThrowOnError(jobRecord.%Save())
			}
		} Catch ex {
			Do ex.Log()
		}
		Quit
rstr(len,time) Quit ""
rchr(time) Quit ""
}

/// Given components of a method call, construct the lock global for the method call. <br />
/// @Argument	pClassname			Classname of method call. <br />
/// @Argument	pMethodName			Method name. <br />
/// @Argument	pArgumentList		Arguments of method call. <br />
ClassMethod GetLockGlobalFromMethodCall(pClassname As %Dictionary.Classname, pMethodName As %Dictionary.Identifier, pArgumentList As %Library.List) [ Final, Internal, Private ]
{
	Set subscriptList = $ListBuild(pClassname, pMethodName)
	If (pArgumentList '= "") {
		Set subscriptList = subscriptList _ pArgumentList
	}
	Set subscriptHash = $System.Encryption.SHA1Hash(subscriptList)
	Return ..#LockGlobal_"("_$$$QUOTE(subscriptHash)_")"
}

/*
 * Possibly rework below to do encryption rather than just encoding.
 */
/// Convert the internal job id to a unique external key. <br />
/// @Argument	pId		Internal id of an instance of <class>Grongier.Rest.Async.JobRecord</class>. <br />
ClassMethod GetJobKeyFromJobId(pId As %String) As %String [ Internal ]
{
	Return $System.Encryption.Base64Encode(pId)
}

/// Convert the unique external key to its equivalent internal job id. <br />
/// @Argument	pKey	External unique identifier for a job. <br />
ClassMethod GetJobIdFromJobKey(pKey As %String) As %String [ Internal ]
{
	Return $System.Encryption.Base64Decode(pKey)
}

}
