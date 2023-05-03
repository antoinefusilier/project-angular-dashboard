import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';

import { SignupComponent } from './signup/signup.component';
import { UserService } from '../appServices/user.service';
import { IssuesComponent } from './issues/issues.component';
import { environment as env} from 'src/environments/environment.development';
import { initializeApp } from 'firebase/app';

const app = initializeApp(env.firebaseConfig);


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    IssuesComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    UserService
  ]
})

export class AuthModule {
  constructor(){
    

  }

 }
