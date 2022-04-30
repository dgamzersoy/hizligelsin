import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseClassService <T> {
 

    public path: string;
  
    constructor(public httpClient: HttpClient) {
      this.path = "https://fakestoreapi.com/";
     }
  
    public getAllModels() {
      return this.httpClient.get<T[]>(this.path);
    }
  }
 

