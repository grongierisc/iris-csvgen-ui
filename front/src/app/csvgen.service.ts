import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvgenService {

  constructor(    private http: HttpClient) { }

  import(formData): any {

    const headers = new HttpHeaders()

    let url = location.toString()
    // point to API
    url = url.replace('csp','api')
    // trim index.html
    var re = new RegExp(/^.*\//);
    url = re.exec(url).toString();
    //url = 'http://localhost:52773/api/IRISAPP/csvgen/'
    var result = this.http.post(url+'import', formData,{ headers, responseType: 'text'})
    return result
  }
}
