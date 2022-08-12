import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { AppRougingModule } from './app-rouging.module';

import { FormsModule } from '@angular/forms';


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
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
