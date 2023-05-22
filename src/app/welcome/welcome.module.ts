import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { HeroComponent } from './hero/hero.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ShowingComponent } from './showing/showing.component';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  declarations: [
    HeroComponent,
    JoinusComponent,
    ShowingComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
