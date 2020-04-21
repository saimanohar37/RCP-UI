import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routingComponents } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import 'babel-polyfill';
import Amplify from 'aws-amplify';
import amplify from '../aws-exports';
import { BottomNavComponent } from './homepage/bottom-nav/bottom-nav.component';

Amplify.configure(amplify);

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AppNavbarComponent,
    BottomNavComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AmplifyUIAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
