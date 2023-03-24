import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as ENV } from 'src/environments/environment.development';

@Injectable()
export class ApiCheckInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const APP_KEY = ENV.app.deployment_key;
    return next.handle(request.clone({ setHeaders: { APP_KEY, Accept: 'application/json', ContentType: 'application/json'  }}));
  }
}
