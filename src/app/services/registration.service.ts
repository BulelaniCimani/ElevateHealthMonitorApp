import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private domain: string = ''
  private endpoint ="api/Registration/register"
  private headers  = new HttpHeaders().set('Content-Type','application/json')
  
  constructor(private _httpClient: HttpClient) { 
    this.domain = environment.domain

  }
 
  register(userData: any){
      return this._httpClient.post<any>(`${this.domain}${this.endpoint}`, userData,{ headers: this.headers})
                            .pipe(catchError(this.error));
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
