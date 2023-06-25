import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError ,map} from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private domain: string
  private endpoint ="api/Login/login"
  private headers  = new HttpHeaders().set('Content-Type','application/json')

  constructor(private _httpClient: HttpClient) { 
    this.domain = environment.domain

  }
 
  login(loginUser: any){
      return this._httpClient.post<any>(`${this.domain}${this.endpoint}`, loginUser,{ headers: this.headers}).pipe(catchError(this.error),map(user => {
                              if(user.isAuthorized)
                              {
                                console.log(user)
                                localStorage.setItem('token', JSON.stringify(user));
                              }
                              return user;
                          }));

  }
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
