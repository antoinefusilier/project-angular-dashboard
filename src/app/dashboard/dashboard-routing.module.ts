import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DivaltoSyncComponent } from './divalto-sync/divalto-sync.component';
import { DomproSyncComponent } from './dompro-sync/dompro-sync.component';
import { ProductsManagmentComponent } from './products-managment/products-managment.component';
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
        path: 'dpro',
        component: DomproSyncComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
