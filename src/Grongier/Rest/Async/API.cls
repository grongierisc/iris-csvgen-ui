Include Grongier.Rest.Async

/// API class that contains methods to trigger background jobs and to obtain status of existing jobs. <br /> 
Class Grongier.Rest.Async.API
{

/// Runs <var>pMethodName</var> from class <var>pClassname</var> in the
/// background. Records job informations in a persistance object (an instance of
/// <class>Grongier.Rest.Async.JobRecord</class>). <br />
/// Returns the key to use to access the job information. <br />
/// Job information can be accessed by calling <method>GetJobRecordFromKey</method>,
/// passing the key in as a parameter. <br />
/// Throws errors. <br />
/// @API.Method <br />
/// @Argument	pClassname		Class that contains method to run in background. <br />
/// @Argument	pMethodName		Method to run in background. <br />
/// @Argument	pArguments...	Arguments to pass to method. <br />
ClassMethod RunInBackgroundAndReturnJobKey(pClassname As %Dictionary.CacheClassname, pMethodName As %Dictionary.CacheIdentifier, pArguments...) As %String
{
	// Clear wakeup events for the current job
	Set jobExists = $System.Event.Clear($Job)
	If 'jobExists {
		$$$ThrowStatus($$$ERROR($$$GeneralError, "Process ID Resource does not exist"))
	}
	
	// Convert to list because Job doesn't support ByRef arguments
	Set argumentList = ""
	Set key = ""
	While 1 {
		Set key = $Order(pArguments(key), 1, value)
		If (key = "") {
			Quit
		}
		Set argumentList = argumentList _ $ListBuild(value)
	}
	
	// Do method validation
	Do ##class(Grongier.Rest.Async.Utils).ValidateMethod(pClassname, pMethodName)
	
	// Start background job
	Job ##class(Grongier.Rest.Async.Utils).DoBackgroundJob(pClassname, pMethodName, argumentList)
	
	// Get info of child process and try to extract the key
	// Timeout should never be hit but its there just in case child process errors before it signals
	Set $ListBuild(code, response) = $System.Event.WaitMsg("", 2)
	If 'code {
		$$$ThrowStatus($$$ERROR($$$GeneralError, "Something went wrong while waiting on the child process."))
	}
	Set $ListBuild(messageType, message) = response
	If (messageType = "error") {
		$$$ThrowStatus(message)
	}
	If (messageType '= "key") {
		$$$ThrowStatus($$$ERROR($$$GeneralError, "Unexpected message type from child process: "_messageType))
	}
		
	Return message
}

/// Returns all available instances of <class>Grongier.Rest.Async.JobRecord</class> based on the
/// provided search criteria. <br />
/// @Argument	pSearchCriteria			Key-value pairs of search criteria. <br />
ClassMethod GetJobRecords(pSearchCriteria As %Library.DynamicObject) As %Library.ListOfObjects(ELEMENTTYPE="Grongier.Rest.Async.JobRecord")
{
	Set jobRecordList = ##class(%Library.ListOfObjects).%New()
	// TODO: Use search criteria
	#dim resultSet As %SQL.StatementResult
	Set query = "SELECT ID FROM Grongier_Rest_Async.JobRecord"
	Set statement = ##class(%SQL.Statement).%New()
	$$$ThrowOnError(statement.%Prepare(query))
	Set resultSet = statement.%Execute()
	If (resultSet.%SQLCODE < 0) {
		Throw ##class(%Exception.SQL).CreateFromSQLCODE(resultSet.%SQLCODE, resultSet.%Message)
	}
	While resultSet.%Next(.sc) {
		$$$ThrowOnError(sc)
		Set id = resultSet.ID
		Set jobRecord = ##class(Grongier.Rest.Async.JobRecord).%OpenId(id, , .sc)
		$$$ThrowOnError(sc)
		$$$ThrowOnError(jobRecordList.Insert(jobRecord))
	}
	$$$ThrowOnError(sc)
	Return jobRecordList
}

/// Returns an instance of <class>Grongier.Rest.Async.JobRecord</class> that is uniquely
/// referenced by <var>pKey</var>.
/// Returns a null oref if no object found. <br />
/// @API.Method <br />
/// @Argument	pKey		Unique reference to an instance of <class>Grongier.Rest.Async.JobRecord</class>. <br />
ClassMethod GetJobRecordFromKey(pKey As %String) As Grongier.Rest.Async.JobRecord [ Internal ]
{
	Set id = ##class(Grongier.Rest.Async.Utils).GetJobIdFromJobKey(pKey)
	If '##class(Grongier.Rest.Async.JobRecord).%ExistsId(id) {
		Return $$$NULLOREF
	}
	Set jobRecord = ##class(Grongier.Rest.Async.JobRecord).%OpenId(id, , .sc)
	$$$ThrowOnError(sc)
	Return jobRecord
}

}
