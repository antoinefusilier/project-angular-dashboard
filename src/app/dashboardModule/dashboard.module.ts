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
import { SyncLogsComponent } from './divalto-sync/sync-logs/sync-logs.component';
import { ModuleProposalComponent } from './divalto-sync/module-proposal/module-proposal.component';
import { ListComponent } from './products-managment/list/list.component';
import { SearchComponent } from './search/search.component';
import { DocComponent } from './doc/doc.component';
import { ManualComponent } from './dompro-sync/heavy-sync/manual/manual.component';
import { AutoComponent } from './dompro-sync/heavy-sync/auto/auto.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './doc/form/form.component';
import { ConfirmDeleteComponent } from './doc/confirm-delete/confirm-delete.component';
import { PreviewComponent } from './doc/preview/preview.component'
import { FormsModule } from '@angular/forms';
import { SearchDocComponent } from './doc/search-doc/search-doc.component';
import { BridgeComponent } from './divalto-sync/bridge/bridge.component';
import { RelatedComponent } from './welcome/related/related.component';

import { ProductsSettingsComponent } from './products-managment/products-settings/products-settings.component';
import { CurrentSyncComponent } from './divalto-sync/current-sync/current-sync.component';
import { StartSyncComponent } from './divalto-sync/start-sync/start-sync.component';
// import { DomSanit }
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { UserMemoryService } from '../appServices/user-memory.service';

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
    InformationsComponent,
    SyncLogsComponent,
    ModuleProposalComponent,
    ListComponent,
    SearchComponent,
    DocComponent,
    ManualComponent,
    AutoComponent,
    FormComponent,
    ConfirmDeleteComponent,
    PreviewComponent,
    SearchDocComponent,
    BridgeComponent,
    RelatedComponent,
    ProductsSettingsComponent,
    CurrentSyncComponent,
    StartSyncComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
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
    // InMemoryWebApiModule.forRoot(UserMemoryService)

  ],
  providers: [
  ]
})
export class DashboardModule {

}
