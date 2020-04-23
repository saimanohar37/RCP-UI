import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { routingComponents } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import amplify from '../aws-exports';
import { AuthService } from './services/auth.service';



Amplify.configure(amplify);


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AppNavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AmplifyUIAngularModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
