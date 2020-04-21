import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-connect-database',
  templateUrl: './connect-database.component.html',
  styleUrls: ['./connect-database.component.css']
})
export class ConnectDatabaseComponent implements OnInit {

  routePath;
  routeHide: boolean = false;
  activate: boolean = true;
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

  nextScreen() {
    console.log("Next screen fix")
    this.router.navigate(["/home/connection-details"])
  }


  activateButton(){
    this.activate = false;
  }
}
