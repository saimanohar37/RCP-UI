import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  routePath;
  routeHide: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router) {
  }



  ngOnInit(): void {
    this.routePath = this.route.snapshot["_routerState"].url
    console.log(this.routePath)
    if (this.routePath == "/home/connect-database") {
      this.routeHide = true;
    } else {
      this.routeHide = false;


    }
  }

}
