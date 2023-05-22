import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IssueComponent } from './appComponents/issue/issue.component';
import { UserMemoryService } from './appServices/user-memory.service';
import { AuthGuard } from './auth.guard';
import { WelcomeModule } from './welcome/welcome.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'doc',
    loadChildren: () => import('./doc/doc.module').then(m=>m.DocModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  // Module dahboard Guard by AuthUser
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboardModule/dashboard.module')
        .then(m => m.DashboardModule),
    canActivate: [AuthGuard]},
  // Module auth
  {
    path: 'auth',
    loadChildren: () => import('./authModule/auth.module').then(m => m.AuthModule)
  },
  // Module admin Guard by AuthAdmin
  {
    path: 'admin',
    loadChildren: () => import('./adminModule/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: IssueComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
