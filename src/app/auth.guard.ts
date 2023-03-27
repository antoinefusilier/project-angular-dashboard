import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, CanMatch, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserService } from './appServices/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanMatch {

  constructor(private UServ: UserService){

  }

  auth = getAuth();
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve)=>{

        onAuthStateChanged(this.auth, async(user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            await this.UServ.callVerifySession(user).then((value: any)=>{
              console.log('CallBack User call verification', value);
              resolve(true)
              console.log('User connected OK >> Redirecting...')
            }).catch((err:any)=>{
              console.log('Issued request')

              resolve(false);
            })
          } else {
            // User is signed out
            // ...
            console.log('User not connected NO >> Rejecting...')
            resolve(false)
          }
        });
      })
  }
  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true
  }
}
