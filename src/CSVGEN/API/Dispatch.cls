Class CSVGEN.API.Dispatch Extends %CSP.REST
{

/// By default convert the input stream to Unicode
Parameter CONVERTINPUTSTREAM = 1;

/// The default response charset is utf-8
Parameter CHARSET = "utf-8";

Parameter HandleCorsRequest = 1;

XData UrlMap [ XMLNamespace = "http://www.intersystems.com/urlmap" ]
{
<Routes>
  <!-- Get this spec -->
  <Route Url="/import" Method="post" Call="import" />
</Routes>
}

/// Get this spec
ClassMethod import() As %Status
{
    #dim %request As %CSP.Request
    #dim stream As %CSP.BinaryStream

    set stream = %request.GetMimeData("file")
    if $IsObject(stream) {
      set ^log("file") = $zcvt(stream.Read(),"I","UTF8")
    }

    set body = %request.Get("body")
    if $d(body) {
      set ^log("body") = body
    }

    if $IsObject(%request.Content) {
      set log = %request.Content.Read()
      w log
      set ^log = log
    }

    Quit $$$OK
}

}
