Class CSVGEN.API.Dispatch Extends %CSP.REST
{

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
    set log = %request.Content.Read()
    w log
    set ^log = log

    Quit $$$OK
}

}
