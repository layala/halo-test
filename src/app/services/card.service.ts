import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private url :string;
  private httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/movies?';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }  
  }

  getMovies(page:any, limit:any) {
    return this.httpClient.get(`${this.url}_page=${page}&_limit=${limit}`, this.httpOptions)
    .pipe(map((data:any) => {
      return data || {};
    }),
    retry(1),
    catchError(this.processError))
  }

  processError(err: any) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}
