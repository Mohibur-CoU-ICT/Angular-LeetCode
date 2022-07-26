import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AllProblemsComponent } from './problemset/all-problems/all-problems.component';

const routes: Routes = [
  {
    path: 'accounts/login',
    component: SigninComponent
  },
  {
    path: 'accounts/register',
    component: SignupComponent
  },
  {
    path: 'accounts/forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'problemset/all',
    component: AllProblemsComponent
  },
  {
    path: '',
    redirectTo: 'accounts/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
