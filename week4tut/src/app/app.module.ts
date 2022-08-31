import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRougingModule } from './app-rouging.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HttpClient } from '@angular/common/http';



const routes: Routes=[
  {path:'login',component:LoginComponent},
  {path:'account',component:AccountComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterTestingModule,
    AppRougingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
