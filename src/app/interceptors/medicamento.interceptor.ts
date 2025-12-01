import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
   HttpInterceptor,
   HTTP_INTERCEPTORS
} from '@angular/common/http'
import { Observable } from "rxjs";
import { TokenService } from "../services/token.service";



@Injectable()
export class MedicamentoInterceptor implements HttpInterceptor {


  constructor(private tokenServicio: TokenService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let intReq = request;
    const token = this.tokenServicio.getToken();

    if (token !== null) {
      intReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
    }

    return next.handle(intReq);
  }

}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: MedicamentoInterceptor, multi: true}];
