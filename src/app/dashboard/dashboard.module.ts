import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { ResultComponent } from './dompro-sync/result/result.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DomproSyncComponent,
    ResultComponent,
    SidebarComponent,
    DivaltoSyncComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
