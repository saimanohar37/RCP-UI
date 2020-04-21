import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLoggedIn = false;
  user: {id: string; username: string; email: string;};

  constructor(private router: Router, private authService: AuthService) {
  
  }

  ngOnInit(): void{
    if(this.isLoggedIn == false){
      this.router.navigate(["/login"]);
    } else {
      //this.router.navigate(["/login"]);
    }
  }
 


  login(){
    console.log(this.isLoggedIn);
    this.authService.isLoggedIn$.subscribe(
      isLoggedIn => (this.isLoggedIn = isLoggedIn)
    );
    this.authService.auth$.subscribe(({id, username, email}) => {
      this.user = {id, username, email};
    });
  }

}

