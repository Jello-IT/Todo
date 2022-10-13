import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  public join(...segments: string[]):string{
    let url = segments.shift() ?? "";
    while(segments.length){
      let nextSegment = segments.shift();
      //TODO anfügen und überprüfen wie viele Slasches dazwischen sind
      if(url.endsWith('/')){
        url = url.slice(0,-1)
      }
      if(url.startsWith('/')){
        url = url.slice(1)
      }
      url += "/" + nextSegment;
      return url;
    }
    return url;
  }
}
