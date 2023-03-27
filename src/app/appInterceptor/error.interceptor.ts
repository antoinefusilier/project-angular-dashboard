import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err=>{
      if(err.status === 401){
        location.reload()
      } else if (err.status === 404){
        location.reload()
      } else if (err.status === 500){
        location.reload()
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
