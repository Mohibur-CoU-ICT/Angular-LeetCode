import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AllProblemsComponent } from './problemset/all-problems/all-problems.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    PageNotFoundComponent,
    SigninComponent,
    ForgotPasswordComponent,
    AllProblemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
