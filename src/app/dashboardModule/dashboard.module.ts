import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { PrestashopComponent } from './settings/prestashop/prestashop.component';
import { AccountComponent } from './settings/account/account.component';
import { AccountBlockDirective } from './header/account-block.directive';
import { UserService } from '../appServices/user.service';
import { Route, Router, RouterModule, UrlSegment } from '@angular/router';
import { ShopStatisticsComponent } from './welcome/shop-statistics/shop-statistics.component';
import { LastSyncComponent } from './dompro-sync/last-sync/last-sync.component';
import { HeavySyncComponent } from './dompro-sync/heavy-sync/heavy-sync.component';
import { LightSyncComponent } from './dompro-sync/light-sync/light-sync.component';
import { InformationsComponent } from './dompro-sync/informations/informations.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DomproSyncComponent,
    SidebarComponent,
    DivaltoSyncComponent,
    WelcomeComponent,
    ProductsManagmentComponent,
    UsersComponent,
    HeaderComponent,
    SettingsComponent,
    PrestashopComponent,
    AccountComponent,
    AccountBlockDirective,
    ShopStatisticsComponent,
    LastSyncComponent,
    HeavySyncComponent,
    LightSyncComponent,
    InformationsComponent
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
