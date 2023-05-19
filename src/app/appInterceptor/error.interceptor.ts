import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AlertsService } from '../appServices/alerts.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private as: AlertsService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      if(err.status === 401){
        // location.reload()
      } else if (err.status === 404){
        // location.reload()
      } else if (err.status === 500){
        // location.reload()
      }

      const error = err.error.message || err.statusText;
      if (error && typeof(error) !== null){
        this.as.error('HTTP Error', 'Erreur dans l\'authentification, ou votre compte, communication avec le serveur impossible, veuillez vous rapprocher d\'un administreur.'+error)
      }

      return throwError(error);
    }))
  }
}
