import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardsComponent } from './app/components/boards/boards.component';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { HomeComponent } from './app/components/home/home.component';
import { AuthLoginComponent } from './libraries/authentication/components/auth-login/auth-login.component';
import { AuthRegisterComponent } from './libraries/authentication/components/auth-register/auth-register.component';
import { AuthResetComponent } from './libraries/authentication/components/auth-reset/auth-reset.component';
import { AuthVerifyEmailComponent } from './libraries/authentication/components/auth-verify-email/auth-verify-email.component';
import { AuthComponent } from './libraries/authentication/components/auth.component';
import { AuthLoginGuard } from './libraries/authentication/guards/auth-login.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'boards', component: BoardsComponent },
      { path: 'notes', component: BoardsComponent },
      { path: 'tasks', component: BoardsComponent },
    ],
  },

  /* AUTH: authentication stuff */
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'register', component: AuthRegisterComponent },
      { path: 'verify-email', component: AuthVerifyEmailComponent },
      { path: 'reset-password', component: AuthResetComponent },
    ],
    canActivate: [AuthLoginGuard],
    data: { inverted: true },
  },

  /* NOT FOUND */
  // { path: '**', component: NotFoundGeneralComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
