import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocRoutingModule } from './doc-routing.module';
import { DocComponent } from './doc.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ViewerComponent } from './viewer/viewer.component';


@NgModule({
  declarations: [
    DocComponent,
    HeaderComponent,
    NavComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule
  ]
})
export class DocModule { }
