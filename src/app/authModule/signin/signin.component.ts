import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    signIn = (provider?: undefined | string, email? : undefined | string, password?: undefined | string) => {

      // [FR] Appel de la méthode de connection du service Utilisateur en fonction du founisseur ou non sélectionné.
      // [EN] Calling connection method of User Service, in terms of selected provider
      let sign: any;

      if (provider && provider === 'google.com'){
        sign = this.Uservice.signInWithGoogle()
      } else  if (provider && provider === 'github.com') {
        sign = this.Uservice.signInWithGithub()
      } else if (email && password) {
        sign = this.Uservice.signWithEmailPassword()
      }
        // [EN] Resolved Success case...
        sign.then((value:any)=>{
          // [EN] All right : Google authenfication, user enabled and data in base correctly générate.
          if (value === true){
            // [EN] Specify new SUCCESS alert to alert service
            this._alertService.success('Connecté !', 'De retour parmis nous ;-)')
            // [EN] Redirect to dashboard
            this.router.navigate(['/dashboard'])
          }
          // [EN] All right : Google authenfication but user account disabled, not permetted
          else if (value === 'disabled'){
            this._alertService.warn('Compte suspendu', 'Votre compte utilisateur est actuellement suspendu. Demandez un support administrateur pour plus d\'information ou demander l\'activation de votre compte.')
          }
          // [EN] Other issues or return, error not spécified for back-end sécurity
          else {
            this._alertService.warn('Erreur d\'authentification', 'Erreur d\'authentification autre, non spécifié pour des raison de sécuritée. Veuillez vérifier vos information de connexion ou faire appel à un administrateur. Désolé')
            this.router.navigate(['/auth/signup'])
          }
        })
        // [EN] Rejected by issued Cases...
        .catch((err:any)=>{
          // [EN] Unvailable case
          if (err === 'unvailable'){
            this._alertService.warn('Erreur d\'authentification', 'La fonctionnalité de connexion avec email et mot de passe n\'est pas encore disponible. Veuillez choisir une autre méthode d\'authentification ou bien vous rapprocher d\'un administrateur')
          }
          // [EN] Specify new warn alert to alert service
          this._alertService.warn('Erreur d\'authentification', 'Erreur d\'authentification autre, non spécifié pour des raison de sécuritée. Veuillez vérifier vos information de connexion ou faire appel à un administrateur. Désolé')
          // [EN] Redirect to signup
          this.router.navigate(['/auth/signup']);
        })
    }
}
