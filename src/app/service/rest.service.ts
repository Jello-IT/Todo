import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import {PathService} from "./path.service";
import {TodoListModel} from "../Model/todo-list-model";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseURL: string;
  private nachname: string;

  constructor(private http: HttpClient, private path: PathService) {
    this.baseURL = environment.baseURL;
    this.nachname = environment.nachname;
  }

  getAll(): Observable<any>{
    let url: string = this.path.join(this.baseURL, this.nachname);
    return this.http.get(url, {});
  }

  createList(name: string): Observable<any>{
    let url: string = this.path.join(this.baseURL, this.nachname);
    let body = JSON.stringify({name: name});
    return this.http.post(url, body,{});
  }
}
