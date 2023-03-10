import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public test = 'test';
  constructor() { }

  signInWithGoogle = () => {
    return new Promise((resolve, reject)=>{
      const provider = new GoogleAuthProvider()
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential){
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            const userData = getAdditionalUserInfo(result)

            if (userData?.isNewUser === true){
              user.delete()
                .then(()=>{
                  console.log('Utilisateur inconnu, rejeté !')
                  // this.router.navigate(['/signup'])
                  reject('Unknow user, admin requested...')
                })
                .catch((err:any)=>{
                  console.log('erreur de credential', err);
                  reject('Credential error, admin requested...')
                })
            } else {
              // this.router.navigate(['/dashboard'])
              this.saveUserInfo(user,userData);
              resolve(true);
            }
          } else {
            reject('Crediential error, admin requested ...')
            console.log('Erreur lors de la récupération du credential google auth');
          }


        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
  });}
  getUserInfo = () => {
    return new Promise((resolve,reject)=>{
    const provider = new GoogleAuthProvider()
    const auth = getAuth();

    if(auth.currentUser){
      resolve(auth.currentUser);
    } else {
      reject('Impossible to get current user data');
    }
  })}

  saveUserInfo = async(userInfo:any, userAdditionalInfo: any) => {
    // console.log("USER INFOS >>> ",userInfo, "USERS ADD INFOS >>> ",userAdditionalInfo);
    // console.log("uid >>",userInfo.uid)
    // console.log("accessToken",userInfo.accessToken)
    // console.log("display Name",userInfo.displayName)
    // console.log("email >>",userInfo.email)
    // console.log("email verified >>",userInfo.emailVerified)
    // console.log("photoURL >>",userInfo.photoURL)
    // console.log("createdAt >>",userInfo.metadata.UserMetadata.createdAt)
    // console.log("lastLoginAt >>",userInfo.metadata.UserMetadata.lastLoginAt)
    // console.log("lastSignInTime >>",userInfo.metadata.UserMetadata.lastSignInTime)
    // console.log("creationTime >>",userInfo.metadata.UserMetadata.creationTime)

    // console.log("localId >>",userInfo.localId)


  }
}
