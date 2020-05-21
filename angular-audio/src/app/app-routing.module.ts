import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuardHelper } from './helpers/auth-guard.helper';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'main-paige', component: MainPageComponent, canActivate: [AuthGuardHelper]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent, MainPageComponent]
