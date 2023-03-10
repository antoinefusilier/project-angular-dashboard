import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';

import { environment as env} from 'src/environments/environment.development';
import { initializeApp } from 'firebase/app';
import { SignupComponent } from './signup/signup.component';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
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
    const app = initializeApp(env.firebaseConfig);

  }

 }
