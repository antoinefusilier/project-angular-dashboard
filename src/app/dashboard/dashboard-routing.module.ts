import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../services/user.service';
import { DashboardComponent } from './dashboard.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { HeavySyncComponent } from './dompro-sync/heavy-sync/heavy-sync.component';
import { InformationsComponent } from './dompro-sync/informations/informations.component';
import { LastSyncComponent } from './dompro-sync/last-sync/last-sync.component';
import { LightSyncComponent } from './dompro-sync/light-sync/light-sync.component';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';
import { AccountComponent } from './settings/account/account.component';
import { PrestashopComponent } from './settings/prestashop/prestashop.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'dompro',
        component: DomproSyncComponent,
        children: [
          {
            path: '',
            redirectTo: 'last-sync',
            pathMatch: 'full',
            outlet: 'dompro'
          },
          {
            path: 'last-sync',
            component: LastSyncComponent,
            outlet: 'dompro'
          },
          {
            path: 'heavy-sync',
            component: HeavySyncComponent,
            outlet: 'dompro'
          },
          {
            path: 'light-sync',
            component: LightSyncComponent,
            outlet: 'dompro'
          },
          {
            path: 'informations',
            component: InformationsComponent,
            outlet: 'dompro'
          }
        ]
      },
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'divalto',
        component: DivaltoSyncComponent
      },
      {
        path: 'products',
        component: ProductsManagmentComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          // {
          //   path: '',
          //   redirectTo: 'account',
          //   pathMatch: 'full',
          // },
          {
            path: 'account',
            component: AccountComponent,
            outlet: 'settings',
            data: { title: 'Mon compte' },
          },
          {
            path: 'prestashop',
            component: PrestashopComponent,
            outlet: 'settings'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
