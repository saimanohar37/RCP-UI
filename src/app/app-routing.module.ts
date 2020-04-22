import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from "@angular/router";


import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { DashboardComponent } from './homepage/dashboard/dashboard.component';
import { DatasourceComponent } from './homepage/datasource/datasource.component';

import { ExternaldsComponent } from './homepage/externalds/externalds.component';

import { ExistingdsComponent } from './homepage/existingds/existingds.component';
import { RdsplatformComponent } from './homepage/rdsplatform/rdsplatform.component';
import { PythondsplatformComponent } from './homepage/pythondsplatform/pythondsplatform.component';
import { ExistingreportsComponent } from './homepage/existingreports/existingreports.component';
import { NewreportsComponent } from './homepage/newreports/newreports.component';

import { ConnectDatabaseComponent } from './homepage/externalds/connect-database/connect-database.component';
import { ConnectionDetailsComponent } from './homepage/externalds/connection-details/connection-details.component';
import { DatabaseNavigatorComponent } from './homepage/externalds/database-navigator/database-navigator.component';

// import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';


// Add routes to this array //
var routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    
  },
  {
    path: "home",
    component: HomepageComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "internal-ds",
        component: DatasourceComponent
      },
      {
        path: "external-ds",
        component: ExternaldsComponent
      },
      {
        path: "existing-ds",
        component: ExistingdsComponent
      },
      {
        path: "r-dsplatform",
        component: RdsplatformComponent
      },
      {
        path: "python-dsplatform",
        component: PythondsplatformComponent
      },
      {
        path: "existing-reports",
        component: ExistingreportsComponent
      },
      {
        path: "new-reports",
        component: NewreportsComponent
      },
      {
        path: "connect-database",
        component: ConnectDatabaseComponent
      },
      {
        path: "connection-details",
        component: ConnectionDetailsComponent
      },
      {
        path: "database-navigator",
        component: DatabaseNavigatorComponent
      }
    ]
  },
  // {
  //   path: "reset",
  //   component: ResetpasswordComponent
  // },



  {
    path: "**",
    redirectTo: "login",
    pathMatch: "full"
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  HomepageComponent,
  DashboardComponent,
  DatasourceComponent,
  ExternaldsComponent,
  ExistingdsComponent,
  RdsplatformComponent,
  PythondsplatformComponent,
  ExistingreportsComponent,
  NewreportsComponent,
  ConnectDatabaseComponent,
  ConnectionDetailsComponent,
  DatabaseNavigatorComponent
  // ResetpasswordComponent,
]



