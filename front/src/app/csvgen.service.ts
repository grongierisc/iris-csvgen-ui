import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsvgenService {

  constructor(    private http: HttpClient) { }

  import(formData): any {
    return this.http.post('http://localhost:52773/api/csvgen/import', formData)
  }
}
