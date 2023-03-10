import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { ChildDirective, ResultComponent } from './dompro-sync/result/result.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './dompro-sync/test/test.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { PrestashopComponent } from './settings/prestashop/prestashop.component';
import { AccountComponent } from './settings/account/account.component';
import { AccountBlockDirective } from './header/account-block.directive';
import { UserService } from '../services/user.service';
import { Route, Router, RouterModule, UrlSegment } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    DomproSyncComponent,
    ResultComponent,
    SidebarComponent,
    DivaltoSyncComponent,
    WelcomeComponent,
    ProductsManagmentComponent,
    UsersComponent,
    ChildDirective,
    TestComponent,
    HeaderComponent,
    SettingsComponent,
    PrestashopComponent,
    AccountComponent,
    AccountBlockDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    // RouterModule.forChild([
    //   {
    //     matcher: (url) => {
    //       if(url.length === 1 && url[0].path.match(/^@[\w]+$/gm)){
    //         return {
    //           consumed: url,
    //           posParams: {
    //             username: new UrlSegment(url[0].path.slice(1), {})
    //           }
    //         };
    //       }
    //       return null;
    //     },
    //     component: UsersComponent
    //   }
    // ]),
    DashboardRoutingModule,
    HttpClientModule
  ]
})
export class DashboardModule {

}
