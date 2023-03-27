import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment as ENV } from 'src/environments/environment.development';
import { UserService } from '../appServices/user.service';
import { User } from '../appInterfaces/user';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Injectable()
export class ApiCheckInterceptor implements HttpInterceptor {

  constructor(private Userv: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const APP_KEY = ENV.app.deployment_key;
    const getCurrentUser = localStorage.getItem('currentUser');
    console.log('Intercept parsed current user',getCurrentUser )
    if (getCurrentUser){
      const CURRENT_USER = getCurrentUser;

      return next.handle(request.clone({ setHeaders: { APP_KEY, CURRENT_USER,  Accept: 'application/json', ContentType: 'application/json'  }}))
    } else {
      return next.handle(request.clone({ setHeaders: { Accept: 'any', ContentType: 'any'  }}))

    }
    // let handle = next.handle(request.clone({ setHeaders: { Accept: 'any', ContentType: 'any'  }}));
  }
}
