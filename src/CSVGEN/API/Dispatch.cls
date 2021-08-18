Class CSVGEN.API.Dispatch Extends %CSP.REST
{

/// Ignore any writes done directly by the REST method.
Parameter IgnoreWrites = 0;

/// By default convert the input stream to Unicode
Parameter CONVERTINPUTSTREAM = 1;

/// The default response charset is utf-8
Parameter CHARSET = "utf-8";

Parameter HandleCorsRequest = 1;

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
  <!-- Get this spec -->
  <Route Url="/import" Method="post" Call="Import" />
  <Route Url="/importng" Method="post" Call="ImportNG" />
  <Route Url="/importngasync" Method="post" Call="ImportNGAsync" />
  <Route Url="/jobs/:jobkey" Method="get" Call="GetJob" />
  <Route Url="/guessit" Method="post" Call="GuessIt" />
</Routes>
}

/// Get this spec
ClassMethod Import() As %Status
{
  #dim %request As %CSP.Request
  #dim stream As %CSP.BinaryStream

  Try {

    do ..Validate(.dynaBody,.stream)
    
    if 'dynaBody.enableUrl{
      $$$ThrowOnError(##class(community.csvgen).StreamToFile(stream,.filename))
      $$$ThrowOnError(##class(community.csvgen).Generate(filename,dynaBody.separator,dynaBody.className))
    } else {
      $$$ThrowOnError(##class(community.csvgen).GenerateFromURL(dynaBody.url,dynaBody.separator,dynaBody.className))
    }


  } Catch ex {
      Return ex.AsStatus()
  }

  Quit $$$OK
}

ClassMethod ImportNG() As %Status
{
  #dim %request As %CSP.Request
  #dim stream As %CSP.BinaryStream

  Try {

    do ..Validate(.dynaBody,.stream)
    

    $$$ThrowOnError(##class(community.csvgen).StreamToFile(stream,.filename))

    do ..DynaToGuess(dynaBody.fields,.rowType)
    set ^pguess = rowType

    $$$ThrowOnError(##class(community.csvgen).Generate(filename,dynaBody.informations.separator,dynaBody.informations.className,.rowType,1,.nbRowImported,0))

    set tDyna = {}
    set tDyna.className = dynaBody.informations.className
    set tDyna.nbRowImported = nbRowImported
    do ..GuessToDyna(rowType,.dyna)
    set tDyna.fields = dyna

    w tDyna.%ToJSON()

  } Catch ex {
      Return ex.AsStatus()
  }

  Quit $$$OK
}

/// Wrapper of csvgen
ClassMethod CsvGenWrapper(filename, dynaBody) As %Library.DynamicObject
{
    set dynaBody = {}.%FromJSON(dynaBody)
    do ..DynaToGuess(dynaBody.fields,.rowType)
    set ^pguess = rowType

    $$$ThrowOnError(##class(community.csvgen).Generate(filename,dynaBody.informations.separator,dynaBody.informations.className,.rowType,1,.nbRowImported,0))

    set tDyna = {}
    set tDyna.className = dynaBody.informations.className
    set tDyna.nbRowImported = nbRowImported
    do ..GuessToDyna(rowType,.dyna)
    set tDyna.fields = dyna

    return tDyna
}

ClassMethod ImportNGAsync() As %Status
{
  #dim %request As %CSP.Request
  #dim stream As %CSP.BinaryStream

  Try {

    do ..Validate(.dynaBody,.stream)
    

    $$$ThrowOnError(##class(community.csvgen).StreamToFile(stream,.filename))

    set jobKey = ##class(Grongier.Rest.Async.API).RunInBackgroundAndReturnJobKey("CSVGEN.API.Dispatch","CsvGenWrapper",filename, dynaBody.%ToJSON())

    //$$$ThrowOnError(##class(community.csvgen).Generate(filename,dynaBody.informations.separator,dynaBody.informations.className,.rowType,1,.nbRowImported,0))

    set tDyna = {}
    set tDyna.jobKey = jobKey

    w tDyna.%ToJSON()

  } Catch ex {
      Return ex.AsStatus()
  }

  Quit $$$OK
}

ClassMethod GetJob(jobkey) As %Status
{
  Set sc = $$$OK
  set tJobRecord = ##class(Grongier.Rest.Async.API).GetJobRecordFromKey(jobkey)
  w:($IsObject(tJobRecord)) tJobRecord.%ToJSON()
  Return sc
}

ClassMethod Info() As %Status
{
  Set sc = $$$OK
  
  w !,"Csvgen-ui will be avialable on /csp/"_$namespace_"/csvgen/index.html"
  w !,"Most likely something like http://localhost:52773/csp/"_$namespace_"/csvgen/index.html"

  Return sc
}

ClassMethod GuessIt() As %Status
{

  do ..Validate(.dynaBody,.stream)

  set stream = %request.GetMimeData("file")
  $$$ThrowOnError(##class(community.csvgen).StreamToFile(stream,.filename))
  set tGuess = ##class(community.csvgen).GetRowTypes(filename,dynaBody.informations.separator,1,5)

  do ..GuessToDyna(tGuess,.dyna)

  w dyna.%ToJSON()

  return $$$OK
}

ClassMethod GuessToDyna(pGuess As %String, ByRef pDyna As %DynamicArray, pSeparator As %String = ",") As %Status
{
  Set sc = $$$OK
  //set pGuess = "survived INTEGER,pclass INTEGER,name VARCHAR(250),sex VARCHAR(250),age INTEGER,sibSp INTEGER,parCh INTEGER,ticket VARCHAR(250),fare MONEY,cabin VARCHAR(250),embarked VARCHAR(250)"
  set pDyna = []
  for i = 1:1:$l(pGuess,pSeparator) {
    set h = $p(pGuess,pSeparator,i)
    quit:h=""
      set tDyna = {}
      set tDyna.column = $p(h," ")
      set tDyna.type = $p(h," ",*)
      do pDyna.%Push(tDyna)
  }
  Return sc
}

ClassMethod DynaToGuess(pDyna As %DynamicArray, ByRef pGuess As %String) As %Status
{
  Set sc = $$$OK

  set pGuess = ""

  set iterator = pDyna.%GetIterator()
    
  while iterator.%GetNext(.key, .value) {
    set pGuess = pGuess_value.column_" "_value.type_","
  }

  set pGuess = $e(pGuess,1,*-1)

  Return sc
}

ClassMethod Validate(ByRef dynaBody, ByRef stream) As %Status
{

    // Get properties
    set body = %request.Get("body")
    set ^log("body") = body
    if '$d(body) {
      $$$ThrowOnError($$$ERROR(9200,"no parameters"))
    }
    set dynaBody = {}.%FromJSON(body)

    // Get stream
    set stream = %request.GetMimeData("file")
    if (('$IsObject(stream)) && ('dynaBody.enableUrl)) {
      $$$ThrowOnError($$$ERROR(9200,"no file"))
    }

    Return $$$OK
}

}
