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
            this._alertService.success('title', 'description')
            this.router.navigate(['/dashboard'])
          } else {
            this.router.navigate(['/signup'])
          }
        }).catch((err:any)=>{
          this.router.navigate(['/signup']);
        })
    }
    githubAuth = () => {
      this.Uservice.signInWithGithub().then((value:any)=>{
        if (value === true){
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/signup']);
        }
      }).catch((err:any)=>{
        this.router.navigate(['/signup']);
      })
    }
    saveUserInfo = async() => {

    }
}
