import { Injectable } from '@angular/core';

import { CsvGen } from './csvgen';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CsvgenService {

  private baseUrl = 'http://localhost:52773/'
  private csvgenUrl = this.baseUrl+'api/csvgen';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  csvgen : CsvGen = {
    "separator" : ";",
    "tableName" : "Table.Name"
  };

  getCsvgen(): CsvGen {
    return this.csvgen
  }

  /** POST: post csv file to generate Table */
  import(csvgen: CsvGen): Observable<any> {
    return this.http.post(this.csvgenUrl+'/import', csvgen, this.httpOptions).pipe(

      catchError(this.handleError<any>('updateHero'))
    );
  }

  constructor(private http: HttpClient) { }


      
/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
