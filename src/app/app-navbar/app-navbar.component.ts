import { Component, OnInit } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    Auth.signOut().then(() => {
      this.router.navigate(["/login"]);
    });
  }
}
