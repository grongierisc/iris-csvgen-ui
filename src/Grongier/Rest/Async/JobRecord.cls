Include Grongier.Rest.Async

/// Keeps track of jobs used in the background in async calls.
Class Grongier.Rest.Async.JobRecord Extends (%Persistent, %JSON.Adaptor)
{

/// Overridden from <class>%Library.Persistent</class>. <br />
Parameter DEFAULTGLOBAL As STRING = "^Grongier.Rest.AsyncJob";

/// Global that keeps track of counter for each job.
Parameter CounterGlobal As STRING [ Internal ] = "^Grongier.Rest.AsyncJobC";

/// Id of the job. <br />
Property JobId As %Integer [ InitialExpression = {$Job}, ReadOnly, Required ];

/// Unique identifier for a job. <br />
Property JobKey As %String(MAXLEN = "") [ Calculated ];

Method JobKeyGet() As %String
{
	Return ##class(Grongier.Rest.Async.Utils).GetJobKeyFromJobId(..%Id())
}

/// Per job id counter. <br />
Property Counter As %Integer [ InitialExpression = {$Increment(@..#CounterGlobal@($Job))}, ReadOnly, Required ];

/// Status of the job. <br />
Property Status As %String(VALUELIST = ",pending,running,complete,error,internal_error") [ InitialExpression = "pending", Required ];

/// Name of class from which method is run for this job. <br />
Property Classname As %Dictionary.Classname [ Required ];

/// Name of method run for this job. <br />
Property MethodName As %Dictionary.Identifier [ Required ];

/// Namespace the job is executing in. <br />
Property Namespace As %String [ InitialExpression = {$Namespace}, ReadOnly, Required ];

/// List of arguments passed in method call run for this job. <br />
Property ArgumentList As %Library.List;

/// Output of the job. <br />
/// <strong>MUST</strong> be a <class>%Library.DynamicAbstractObject</class> that has been
/// stored in the stream or will be empty if the job has no result.
Property Result As %Stream.GlobalCharacter;

/// Stores output of any write commands during the execution of the background job. <br />
Property WrittenOutput As %Stream.GlobalCharacter;

/// Start time of job (i.e. when job is requested)
Property StartTime As %TimeStamp [ InitialExpression = {$$$CurrentTime}, ReadOnly, Required ];

/// End time of job
Property EndTime As %TimeStamp;

Index JobIdIdx On (JobId, Counter) [ IdKey ];

Index MethodCallIdx On (Classname, MethodName);

/// Base JSON translations. Only Status and EndTime can be set via JSON import once object is created.
XData BasicReference [ XMLNamespace = "http://www.intersystems.com/jsonmapping" ]
{
<Mapping Mapping="BasicReference" IgnoreNull="true" Null="true" xmlns="http://www.intersystems.com/jsonmapping">
<Property Name="JobId" Include="NONE"/>
<Property Name="JobKey" FieldName="job_key" Include="OUTPUTONLY"/>
<Property Name="Counter" Include="NONE"/>
<Property Name="Status" FieldName="status"/>
<Property Name="Classname" FieldName="classname"/>
<Property Name="MethodName" FieldName="method_name"/>
<Property Name="ArgumentList" FieldName="argument_list"/>
<Property Name="Result" FieldName="result" Include="OUTPUTONLY"/>
<Property Name="WrittenOutput" FieldName="written_output" Include="OUTPUTONLY"/>
<Property Name="StartTime" FieldName="start_time" Include="OUTPUTONLY"/>
<Property Name="EndTime" FieldName="end_time"/>
</Mapping>
}

Method %ToJSON() As %String
{

	do ..%JSONExportToString(.json)
	set dyna = {}.%FromJSON(json)
	//Cast JsonString to DynaObject
	set:(dyna.Result'="") dyna.Result = {}.%FromJSON(dyna.Result)

	Return dyna.%ToJSON()
}

Method %OnNew(pClassname As %Dictionary.Classname, pMethodName As %Dictionary.Identifier, pArgumentList As %Library.List) As %Status [ Private, ServerOnly = 1 ]
{
	Set ..Classname = pClassname
	Set ..MethodName = pMethodName
	Set ..ArgumentList = pArgumentList
	Quit $$$OK
}

Storage Default
{
<Data name="JobRecordDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Status</Value>
</Value>
<Value name="3">
<Value>Classname</Value>
</Value>
<Value name="4">
<Value>MethodName</Value>
</Value>
<Value name="5">
<Value>Namespace</Value>
</Value>
<Value name="6">
<Value>ArgumentList</Value>
</Value>
<Value name="7">
<Value>Result</Value>
</Value>
<Value name="8">
<Value>WrittenOutput</Value>
</Value>
<Value name="9">
<Value>StartTime</Value>
</Value>
<Value name="10">
<Value>EndTime</Value>
</Value>
</Data>
<DataLocation>^Grongier.Rest.AsyncJobD</DataLocation>
<DefaultData>JobRecordDefaultData</DefaultData>
<IdLocation>^Grongier.Rest.AsyncJobD</IdLocation>
<IndexLocation>^Grongier.Rest.AsyncJobI</IndexLocation>
<StreamLocation>^Grongier.Rest.AsyncJobS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
