import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  routePath;
  routeHide: boolean = false;
  constructor(private route: ActivatedRoute,
    private router: Router) {


  }


  ngOnInit() {
    this.routePath = this.route;
    console.log(this.routePath)
    if (this.routePath == "home") {
      this.routeHide = true;
    } else {
      this.routeHide = false;
    }
  }

}
