import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HeroComponent } from './hero/hero.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ShowingComponent } from './showing/showing.component';
import { WelcomeComponent } from './welcome.component';
import { DocComponent } from './doc/doc.component';
import { NavComponent } from './doc/nav/nav.component';
import { ViewerComponent } from './doc/viewer/viewer.component';


@NgModule({
  declarations: [
    HeroComponent,
    JoinusComponent,
    ShowingComponent,
    WelcomeComponent,
    DocComponent,
    NavComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
