import { RouterModule, Routes } from '@angular/router';

// Import canActivate guard services
import { AuthGuard } from "src/app/Auth_1/shared/guard/auth.guard";
import { DashboardComponent } from 'src/app/Auth_1/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/Auth_1/components/forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { SecureInnerPagesGuard } from "src/app/Auth_1/shared/guard/secure-inner-pages.guard";
// Required components for which route services to be activated
import { SignInComponent } from 'src/app/Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/Auth_1/components/sign-up/sign-up.component';
import { VerifyEmailComponent } from 'src/app/Auth_1/components/verify-email/verify-email.component';
export const SessionRoutes: Routes = [
  { path: 'signin', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'signup', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

