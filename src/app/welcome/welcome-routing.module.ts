import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ShowingComponent } from './showing/showing.component';
import { JoinusComponent } from './joinus/joinus.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'hero',
        pathMatch:"full"
      },
      {
        path: 'hero',
        component: HeroComponent
      },{
        path: 'showing',
        component: ShowingComponent
      },{
        path: 'joinus',
        component: JoinusComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {

}
