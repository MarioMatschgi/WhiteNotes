import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthProfileComponent } from './components/auth-profile/auth-profile.component';
import { AuthVerifyEmailComponent } from './components/auth-verify-email/auth-verify-email.component';
import { AuthRegisterComponent } from './components/auth-register/auth-register.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { AuthBaseComponent } from './components/auth-base/auth-base.component';
import { AuthComponent } from './components/auth.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from '../popover/popover.module';
import { AuthResetComponent } from './components/auth-reset/auth-reset.component';

const components = [
  AuthComponent,
  AuthProfileComponent,
  AuthBaseComponent,
  AuthVerifyEmailComponent,
  AuthRegisterComponent,
  AuthLoginComponent,
  AuthResetComponent,
];

/**
 * Module for Authentication
 */
@NgModule({
  declarations: components,
  imports: [CommonModule, AppRoutingModule, PopoverModule, FormsModule],
  exports: components,
})
export class AuthenticationModule {}
