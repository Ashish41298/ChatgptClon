import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BardAIComponent } from './components/bard-ai/bard-ai.component';
import { BothomeComponent } from './components/bothome/bothome.component';
import { DashComponent } from './components/dash/dash.component';
import { DectivelComponent } from './components/dectivel/dectivel.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
// import { AppComponent } from './app.component';

const routes: Routes = [
  {
    component: DashComponent, canActivate: [authGuard],
    pathMatch: 'full',
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: DashComponent, canActivate: [authGuard],
    path: 'Dashboard'
  },
  {
    component: BothomeComponent, canActivate: [authGuard],
    path: 'ChatGptAi'
  },
  {
    component: BardAIComponent, canActivate: [authGuard],
    path: 'BardAi'
  },
  {
    component: DectivelComponent, canActivate: [authGuard],
    path: 'dlang'
  },
  {
    component: LoginComponent,
    path: '**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
