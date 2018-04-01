import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { Key } from 'protractor';

@Injectable()
export class MyserviceService {
  serviceproperty = "Service Created";
  constructor(private http:Http) { }

  public baseUrl1: string = 'http://ec2-52-74-218-145.ap-southeast-1.compute.amazonaws.com:8002/';
  public baseUrl: string = 'http://jsonplaceholder.typicode.com/users';

  /* Method made to access any anywhere in components */
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }

 /* http call methods */

/* Method -01  */
  get(api,queryString){
    console.log("check parameter of get api..",api,queryString)    
    if(queryString.id){
      this.baseUrl +='?id=' + queryString.id 
      console.log("with query string..",this.baseUrl)
    }
    console.log("baseUrl-->>",this.baseUrl)
   return this.http.get(this.baseUrl).
    map((response) => response.json())
  }
 
 /* Method-02 Not working*/
 /*  get(api): Observable<any>{
    console.log("check parameter of get api..",api)
    return this.http.get(this.baseUrl);
  } */
}
