import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult, GithubAuthProvider, UserInfo, AuthCredential, UserCredential, AuthProvider, OAuthCredential } from 'firebase/auth';
import { environment as ENV} from 'src/environments/environment.development';
import { UserMemoryService } from './user-memory.service';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  public test = 'test';
  constructor(private http: HttpClient, private userMemory: UserMemoryService) { }

  signInWithGoogle = () => {
    return new Promise((resolve, reject)=>{
      const provider = new GoogleAuthProvider()
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential: Credential | OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);
          console.log('await credential');
          if (credential){
            console.log('credential');

            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            const userData = getAdditionalUserInfo(result)

            if (userData?.isNewUser === false){
              this.callVerifySession(user).then((callBack:any)=>{

                console.log('callBack.validity',callBack.validity)

                console.log('typeof callBack.validity', typeof(callBack.validity));

                if (callBack.validity === ENV.app.valid_return_key
                  && typeof(callBack.validity) === 'string'
                  && callBack.validity.length > 10
                  ){
                  console.log('Session weldone verify', callBack);
                  // this.saveUserInfo(user,userData);

                  this.userMemory.saveUserInfo({
                    _id: callBack.user._id,
                    first_name: callBack.user.first_name,
                    last_name: callBack.user.last_name,
                    email: callBack.user.email || null,
                    secret: {
                      token_id: callBack.user.token,
                      public_key: callBack.user.public_key
                    },
                    provider: "google.com",
                  })
                } else {
                  throw new Error('Invalid returned key');
                }

                resolve(true);
              }).catch((err:any)=>{
                console.log('Verification issued',err);
                reject('Failled session verification');
              })
            } else {
              // Demande de vérification de l'utilisateur au backEnd
              let header = new HttpHeaders({
                "Content-Type" : "application/json",
                "Accept" : "application/json"
              })
              let body = {
                provider: 'google',
                user: user,
                additionInfos: userData
              }

              let req1 = this.http.post('http://localhost:3007/cr-auth/newUser', body, {headers: header})
              req1.subscribe((value:any)=>{
                console.log('Réponse du backEnd',value);
              })

            }
          } else {
            console.log('credential');
            reject('Crediential error, admin requested ...')
            console.log('Erreur lors de la récupération du credential google auth');
          }


        }).catch((error) => {
          // Handle Errors here.
          console.log('Connection issued >>>',error.code);

          if (error.code == 'auth/user-disabled' || error.message.indexOf('auth/user-disabled')){
            console.log('Compte utilisateur suspendu');
            resolve('disabled');
          }
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
  });}

  signInWithGithub = () => {
    return new Promise((resolve, reject)=>{
      const provider = new GithubAuthProvider();
      provider.setCustomParameters({
        'allow_signup': 'false'
      });
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          if(credential){
            const token = credential.accessToken;
            const user = result.user;
            console.log('USER >>> ',user);
            resolve(true);
          } else {
            reject(' >>> Credential issues');
          }


          // The signed-in user info.
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
          // ...
          console.log(error);
          reject(' >>> Connection catch issued')
        });
    })

  }

  callVerifySession = async(user: any, credential?:Credential | OAuthCredential) => {
    return new Promise(async(resolve,reject)=>{
      let header = new HttpHeaders({
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      })
      let body = {
        user: user
      }
      this.http.post('http://localhost:3007/cr-auth/verifySession', body, {headers: header})
      .subscribe((callBack:any)=>{
        console.log('Réponse du backEnd',callBack);
        console.log('Callback validity', callBack.validity);
        if(callBack.validity === ENV.app.valid_return_key){
          this.userMemory.saveUserInfo({
            _id: callBack.user._id,
            first_name: callBack.user.first_name,
            last_name: callBack.user.last_name,
            email: callBack.user.email || null,
            secret: {
              token_id: callBack.user.secrets.token,
              public_key: callBack.user.secrets.public_key
            },
            provider: "google.com",
          }).then((value:any)=>{
            console.log('Local User saved', value);
          }).catch((err:any)=>{
            console.log('Error',err);
          })

          resolve(true);
        } else {
          reject (false);
        }
      })
      }).then((value: any)=>{
        console.log('Requete de vérification de session envoyée/reçue avec succès',value);

      }).catch((err:any)=>{
        console.error('Verification request to remote failed', err);
        // if(err.message)
        // {
        //   console.log('ERROR MESSAGE', err);
        // }
        throw new Error(err);
      })
  }
  callKillSession = async() => {

  }

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
