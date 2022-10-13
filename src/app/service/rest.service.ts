import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from 'rxjs';
import {environment} from "../../environments/environment";
import * as path from "path";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private baseURL: string;
  private nachname: string;

  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
    this.nachname = environment.nachname;
  }

  getAll(): Observable<any>{
    let url: string = path.join(this.baseURL, this.nachname);
    return this.http.get(url, {});
  }
}
