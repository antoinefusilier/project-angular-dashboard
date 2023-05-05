import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { environment as env } from 'src/environments/environment.development';
import { UserService } from './appServices/user.service';
import { AlertComponent } from './appComponents/alert/alert.component';
import { IssueComponent } from './appComponents/issue/issue.component';
import { ApiCheckInterceptor } from './appInterceptor/api-check.interceptor';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserMemoryService } from './appServices/user-memory.service';
import { LoaderComponent } from './appComponents/loader/loader.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    IssueComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // InMemoryWebApiModule.forRoot(UserMemoryService)
  ],
  providers: [
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiCheckInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    const app = initializeApp(env.firebaseConfig);
  }


}
