import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult } from 'firebase/auth';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    constructor(private router: Router){
    }
    googleAuth = () => {
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
                    this.router.navigate(['/signup'])
                  })
                  .catch((err:any)=>{
                    console.log('erreur de credential', err);
                    this.router.navigate(['/signin'])

                  })
              }

              console.log('user >> ', user, '<br> userData >>', userData);
            } else {
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


    }

}
