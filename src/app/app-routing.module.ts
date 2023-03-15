import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  // Module dahboard Guard by AuthUser
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [AuthGuard]},
  // Module auth
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  // Module admin Guard by AuthAdmin
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule),
    outlet: 'alerts',
  },
  {
    path: '**',
    redirectTo: 'auth'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
