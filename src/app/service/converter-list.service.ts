import { Injectable } from '@angular/core';
import {ToDoListType} from "../type/todo-list.typ";
import {TodoListModel} from "../Model/todo-list-model";
import {TodoListListType} from "../type/todo-list-list-type";

@Injectable({
  providedIn: 'root'
})
export class ConverterListService {

  constructor() { }
  public convertList(listJson: TodoListListType): TodoListModel[]{
    let list: TodoListModel[] = [];
    listJson.items.forEach((value: ToDoListType, index)=>{
        let todoListModel = new TodoListModel(value.id, value.name);
        list.push(todoListModel);
      }
    );
    return list;
  }
}
