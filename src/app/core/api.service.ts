import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ENV } from './env.config';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }


  // GET Set
  getSet$(setId: string): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}set/${setId}`)
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }


  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      // this.auth.login();
    }
    return ObservableThrowError(errorMsg);
  }
}
