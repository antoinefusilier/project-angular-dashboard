import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() {


  }
  authListener = async() => {
    return new Promise((resolve, reject)=>{
      const auth = getAuth();

      onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log('User connected OK >> Redirecting...')
        resolve
      } else {
        // User is signed out
        // ...
        console.log('User non connected NO >> Rejecting...')
        reject
      }
    });
  })}

}
