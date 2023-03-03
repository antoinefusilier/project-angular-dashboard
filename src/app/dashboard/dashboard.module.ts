import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { HttpClientModule } from '@angular/common/http';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { ResultComponent } from './dompro-sync/result/result.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHeaderComponent,
    DomproSyncComponent,
    ResultComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
