import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment as ENV } from 'src/environments/environment';
import { UserService } from '../appServices/user.service';
import { User } from '../appInterfaces/user';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { AlertsService } from '../appServices/alerts.service';

@Injectable()
export class ApiCheckInterceptor implements HttpInterceptor {

  constructor(private Userv: UserService, private alertService: AlertsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    const APP_KEY = ENV.app.deployment_key;
    const getCurrentUser = localStorage.getItem('currentUser');
    // console.log('Intercept parsed current user',getCurrentUser )
    if (getCurrentUser){
      const CURRENT_USER = getCurrentUser;
      // console.log('Interception de la requetem, APPKEY', APP_KEY, CURRENT_USER)
      return next.handle(request.clone({ setHeaders: { APP_KEY, CURRENT_USER,  Accept: ['application/json', 'application/xml'], ContentType: 'application/json', AccessControlAllowOrigin: '*'  }}))
    } else if (!getCurrentUser) {
      this.alertService.warn(`Connexion...`, `Session actuellement vide`)
      return next.handle(request.clone({ setHeaders: { APP_KEY,  Accept: ['application/json', 'application/xml'], ContentType: 'application/json', AccessControlAllowOrigin: '*'  }}))
    }else {
      this.alertService.error('HTTP Error', 'Erreur dans l\'authentification, ou votre compte, communication avec le serveur impossible, veuillez vous rapprocher d\'un administreur.')
      return next.handle(request.clone(
        {
          setHeaders:
            {
              Accept: 'application/json',
              ContentType: ['application/json', 'application/xml'],
              AccessControlAllowOrigin: '*'
            }
          }
          ))

    }
    // let handle = next.handle(request.clone({ setHeaders: { Accept: 'any', ContentType: 'any'  }}));
  }
}
