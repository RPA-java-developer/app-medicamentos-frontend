import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginUsiarioDto } from '../modules/login-usiario.dto';
import { NuevoUsiarioDto } from '../modules/nuevo-usuario.dto';
import { TokenDto } from '../modules/token.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authURL;

  textoError: string;


  constructor(private httpClient: HttpClient) { }

  login(usuarioDto: LoginUsiarioDto): Observable<any> {
    console.log(usuarioDto);
    //return this.httpClient.post<TokenDto>(this.authURL + 'authenticate', usuarioDto);


    return this.httpClient.post<TokenDto>(this.authURL + 'authenticate', usuarioDto).pipe(
      catchError(this.handleError)
    );

  }

  registro(dto: NuevoUsiarioDto): Observable<any> {

    return this.httpClient.post<any>(this.authURL + 'register', dto);

  }



  private handleError(error: HttpErrorResponse) {
    console.log("entra a HHH");
    console.log(error);
    console.log(error.message);
    console.log(error.error);
    console.log(error.error.Data);

    //this.textoError = '{"TimeStamp": "2025-11-27T03:08:37.857+00:00","Message": "Authentication","Status": 401,"Data": "Invalid credentials, please check details and try again."}';



    let errorMessage = 'An unknown error occurred!';
    let errorData: any = null;
    let errorStatus: number | undefined = undefined;

    if (error.error instanceof ErrorEvent) {
      console.log("entra a ErrorEvent");
      // Client-side or network error
      errorMessage = `Error: ${error.error.message}`;

    } else {
      console.log("entra diferente a ErrorEvent");

      // Backend error
      errorStatus = error.status;



      if (error.error && typeof error.error === 'object') {

            console.log("entra error PROPIEDADES");

        // Assuming the backend sends a JSON object with 'message' and 'data' properties
        //errorMessage = error.error.message || `Error Code: ${error.status}, Message: ${error.message}`;
        errorMessage = error.error.message || ` Code: ${error.status}, Message: ${error.message}, Data: ` + '{"TimeStamp": "2025-11-27T03:08:37.857+00:00","Message": "Authentication","Status": 401,"Data": "Invalid credentials, please check details and try again."}';


        console.log(errorMessage);

        //errorData = error.error.data || null;
        //errorData = error.error.Data;
        errorData = '{"TimeStamp": "2025-11-27T03:08:37.857+00:00","Message": "Authentication","Status": 401,"Data": "Invalid credentials, please check details and try again."}';
        console.log(errorData);

      } else if (typeof error.error === 'string') {
         console.log("entra error PLANO");

        // Backend might send a plain string error message
        errorMessage = `Error Code: ${error.status}, Message: ${error.error}`;
      } else {
        console.log("entra error OTRA COSA ");

        errorMessage = `Error Code: ${error.status}, Message: ${error.message}`;
      }
    }

    console.log("--------------------------------------");
    console.error(errorMessage, errorData, errorStatus); // Log the error for debugging
    console.log(errorMessage);
    console.log(errorData);
    console.log(errorStatus);

    console.log("--------------------------------------");
    return throwError(() => new Error(errorMessage, errorData)); // Rethrow as a new error
  }



}
