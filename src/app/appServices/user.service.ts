import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult, GithubAuthProvider, UserInfo, AuthCredential, UserCredential, AuthProvider, OAuthCredential } from 'firebase/auth';
import { environment as ENV} from 'src/environments/environment.development';
import { User } from '../appInterfaces/user';
import { UserMemoryService } from './user-memory.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  public test = 'test';
  constructor(
    private http: HttpClient,
    private userMemory: UserMemoryService,
    private router: Router) { }

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

            // If not new firebase user of project...
            if (userData?.isNewUser === false){
              this.callVerifySession(user)
                .then((callBack:any)=>{

                // Verification callback then value
                if (typeof(callBack) === 'boolean'
                  && callBack === true){
                    resolve(true)
                } else {
                  // Else return callback value for read validity issue
                  reject(callBack)
                }

                })
                // Issued :: Verification method with backend failed
                .catch((err:any)=>{
                  // console.error(err);
                  reject('Failled session verification');
                })
            } else {
              // [FR] Demande de vérification et enregistrement de l'utilisateur au backEnd
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

          // [EN] If error code signify a disabled account on firebase projet
          if (error.code == 'auth/user-disabled' || error.message.indexOf('auth/user-disabled')){
            resolve('disabled');
          } else {
            reject('google_authentification_failed');
          }
        });
        // END signInWithPopup
      });
    // END signInWithGoogle
  }

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

  signWithEmailPassword = () => {
    return new Promise (async(resolve, reject)=>{
      reject('unvailable');
      return
    })
  }

  callVerifySession = async(user: any, credential?:Credential | OAuthCredential) => {
    return new Promise((resolve,reject)=>{
      let header = new HttpHeaders({
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      })
      let body = {
        user: user
      }
      this.http.post(`${environment.backEnd.cr_auth}/verifySession`, body, {headers: header})
        .subscribe(async(callBack:any)=>{
          console.log('Réponse du backEnd',callBack);
          console.log('Callback validity', callBack.validity);
          if(callBack.validity === ENV.app.valid_return_key
            && typeof(callBack.validity) === 'string'
            && callBack.validity.length > 10
            ){

            // Call brother method for saved in local storage public user info
            await this.saveUserInfo({
              _id: callBack.user._id,
              first_name: callBack.user.first_name,
              last_name: callBack.user.last_name,
              email: callBack.user.email || null,
              secret: {
                token_id: callBack.user.secrets.token  || undefined,
                public_key: callBack.user.secrets.public_key  || undefined
              },
              providers: callBack.user.providers || undefined

              // {
                // google: {
                  // photoURL: callBack.user.providers.google.photoURL,
                  // phone: callBack.user.providers.google.phone
//
                // } || undefined,
                // github: {
                  // photoURL: callBack.user.github.photoURL ,
                  // phone: callBack.user.providers.github.phone
                // } || undefined
              // }
              })
              // Success save user info on local storage
              .then(()=>{
                resolve(true)
                console.log('Local User saved');
              })
              // Failed to saved user info on local
              .catch((err:any)=>{
                reject('Saving local user failed')
                console.log('Error',err);
              })
          } else {
            reject ('CallBack validy compromise');
          }
        },(error)=>{
          this.router.navigate(
            ['/auth'],
            { queryParams: { error: 'ERR_CONNECTION_REFUSED'}}
          );
        })
    })
  }

  callKillSession = async() => {

  }

  getCurrentUser = () => {
    return new Promise((resolve,reject)=>{

      const localUser: UserInfo | any = localStorage.getItem('currentUser')

      console.log('getCurrentUser', localUser);
      console.log('getCurrentUser PARSED', JSON.parse(localUser));


      if (localUser.provider === 'google.com'){
        const provider = new GoogleAuthProvider()
        const auth = getAuth();
        if(auth.currentUser){
          console.log(auth.currentUser)
          resolve(localUser);
        } else {
          reject('Impossible to get current user data');
        }
      } else {
        resolve(localUser);

      }


  })}

  saveUserInfo = async(userInfo: any, userAdditionalInfo?: null | any) => {
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', JSON.stringify(userInfo))


  }
}
