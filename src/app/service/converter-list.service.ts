import { Injectable } from '@angular/core';
import {ToDoListType} from "../type/todo-list.typ";
import {TodoListModel} from "../Model/todo-list-model";

@Injectable({
  providedIn: 'root'
})
export class ConverterListService {

  constructor() { }
  public convertList(ListJson: ToDoListType[]): TodoListModel[]{
    let list: TodoListModel[] = [];
    ListJson.forEach((value: ToDoListType, index)=>{
        let todoListModel = new TodoListModel(value.id, value.name);
        list.push(todoListModel);
      }
    );
    return list;
  }
}
