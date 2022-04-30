import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseClass } from '../models/baseClass';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  public path: string;

  constructor(private httpClient: HttpClient) {
    this.path = "https://fakestoreapi.com/";
   }

  public getAllModels() {
    return this.httpClient.get<T[]>(this.path);
  }

  public getModelById(id:number){
    return this.httpClient.get<T>(this.path + "/" + id);
  }
}