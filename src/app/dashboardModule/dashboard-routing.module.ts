import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../appServices/user.service';
import { DashboardComponent } from './dashboard.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { DocComponent } from './doc/doc.component';
import { ModuleProposalComponent } from './divalto-sync/module-proposal/module-proposal.component';
import { SyncLogsComponent } from './divalto-sync/sync-logs/sync-logs.component';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { HeavySyncComponent } from './dompro-sync/heavy-sync/heavy-sync.component';
import { InformationsComponent } from './dompro-sync/informations/informations.component';
import { LastSyncComponent } from './dompro-sync/last-sync/last-sync.component';
import { LightSyncComponent } from './dompro-sync/light-sync/light-sync.component';
import { ListComponent } from './products-managment/list/list.component';
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
        redirectTo: 'dompro',
        pathMatch: 'full'
      },
      {
        path: 'doc',
        component: DocComponent
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
        component: WelcomeComponent,
        children: [

        ]
      },
      {
        path: 'divalto',
        component: DivaltoSyncComponent,
        children: [
          {
            path: '',
            redirectTo: 'sync-logs',
            pathMatch: 'full',
            outlet: 'divalto'
          },
          {
            path: 'sync-logs',
            component: SyncLogsComponent,
            outlet: 'divalto'
          },
          {
            path: 'modules-proposal',
            component: ModuleProposalComponent,
            outlet: 'divalto'
          },
          {
            path: 'heavy-sync',
            component: HeavySyncComponent,
            outlet: 'divalto'
          },
          {
            path: 'light-sync',
            component: LightSyncComponent,
            outlet: 'divalto'
          },
          {
            path: 'doc',
            component: DocComponent,
            outlet: 'divalto'
          }
        ]
      },
      {
        path: 'products',
        component: ProductsManagmentComponent,
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
            outlet: 'productsManagment'
          },
          {
            path: 'list',
            component: ListComponent,
            outlet: 'productsManagment'
          }
        ]
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
