import { Component, OnInit } from '@angular/core';
import {RestService} from "../service/rest.service";
import {TodoListModel} from "../Model/todo-list-model";
import {ConverterListService} from "../service/converter-list.service";

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {

  public list: TodoListModel[] = [];


  constructor(private rest: RestService,private converter: ConverterListService) {

  }

  ngOnInit(): void {
  }

  getOverview():void{
    this.rest.getAll().subscribe({
      next: (value) =>{
        this.list = this.converter.convertList(value);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
