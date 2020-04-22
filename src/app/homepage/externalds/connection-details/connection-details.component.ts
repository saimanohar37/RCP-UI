import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-connection-details',
  templateUrl: './connection-details.component.html',
  styleUrls: ['./connection-details.component.css']
})
export class ConnectionDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  previousScreen(){
    this.router.navigate(["/home/connect-database"])
  }

  finishScreen() {
    console.log("Next screen fix")
    this.router.navigate(["/home/database-navigator"])
  }
 


}
