import { Component, OnInit } from '@angular/core';
import {RestService} from "../service/rest.service";

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {

  constructor(private rest: RestService) {

  }

  ngOnInit(): void {
  }

  getOverview():void{
    this.rest.getAll();
  }

}
