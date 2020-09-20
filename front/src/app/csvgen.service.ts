import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvgenService {

  constructor(    private http: HttpClient) { }

  import(formData): any {
    let url = location.toString()
    // point to API
    url = url.replace('csp','api')
    // trim index.html
    var re = new RegExp(/^.*\//);
    url = re.exec(url).toString();
    //url = 'http://localhost:52773/api/csvgen/'
    return this.http.post(url+'import', formData)
  }
}
