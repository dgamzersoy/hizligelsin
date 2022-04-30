import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title:string;
  price:string;
  stock:string;
  description:string;

  constructor() {
   }

  ngOnInit(): void {
  }

}
