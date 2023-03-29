import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult } from 'firebase/auth';
import { AlertsService } from 'src/app/appServices/alerts.service';
import { UserService } from 'src/app/appServices/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    constructor(private router: Router,private Uservice: UserService, private _alertService: AlertsService){

    }
    googleAuth = () => {
        this.Uservice.signInWithGoogle().then((value:any)=>{
          if (value === true){
            this._alertService.success('Connecté !', 'De retour parmis nous ;-)')
            this.router.navigate(['/dashboard'])
          } else if (value === 'disabled'){
            this._alertService.warn('Compte suspendu', 'Votre compte utilisateur est actuellement suspendu. Demandez un support administrateur pour plus d\'information ou demander l\'activation de votre compte.')
          } else {
            this._alertService.warn('Erreur d\'authentification', 'Erreur d\'authentification autre, non spécifié pour des raison de sécuritée. Veuillez vérifier vos information de connexion ou faire appel à un administrateur. Désolé')
            this.router.navigate(['/auth/signup'])
          }
        }).catch((err:any)=>{
          this._alertService.warn('Erreur d\'authentification', 'Erreur d\'authentification autre, non spécifié pour des raison de sécuritée. Veuillez vérifier vos information de connexion ou faire appel à un administrateur. Désolé')
          this.router.navigate(['/auth/signup']);
        })
    }
    githubAuth = () => {
      this.Uservice.signInWithGithub().then((value:any)=>{
        if (value === true){
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/auth/signup']);
        }
      }).catch((err:any)=>{
        this.router.navigate(['/auth/signup']);
      })
    }
    saveUserInfo = async() => {

    }
}
