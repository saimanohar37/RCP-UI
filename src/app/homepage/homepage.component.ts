
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  routePath;
  routeHide: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}
 
  //ngOnInit() loads intially on the app start.
  ngOnInit(): void {
    this.routePath = this.route.snapshot['_routerState'].url;
   if(this.routePath == "/home/connect-database" || this.routePath == "/home/connection-details"){
    this.routeHide = true;
  } else {
    this.routeHide = false;
  }
  }
 
  triggerClick(){
    this.routePath = this.route.snapshot['_routerState'].url;
    if(this.routePath == "/home/connect-database" || this.routePath == "/home/connection-details"){
      this.routeHide = true;
    } else {
      this.routeHide = false;
    }
  }
}