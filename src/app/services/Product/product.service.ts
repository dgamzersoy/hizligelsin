import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { BaseService } from '../base.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {

  constructor(httpClient:HttpClient) {
    super(httpClient);
    this.path += "products";
  }
}
