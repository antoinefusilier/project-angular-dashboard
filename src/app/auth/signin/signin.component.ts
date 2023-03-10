import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo, getRedirectResult } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    constructor(private router: Router,private Uservice: UserService){

    }
    googleAuth = () => {
        this.Uservice.signInWithGoogle().then((value:any)=>{
          if (value === true){
            this.router.navigate(['/dashboard'])
          } else {
            this.router.navigate(['/signup'])
          }
        }).catch((err:any)=>{
          this.router.navigate(['/signup'])
        })
    }
    saveUserInfo = async() => {

    }
}
