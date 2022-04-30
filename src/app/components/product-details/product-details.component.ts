import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title: string;
  price: string;
  stock: string;
  description: string;
  image:string;
  category:string;
  product:Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getById(params["id"]);
    })
  }

  getById(id:number){
    this.productService.getModelById(id).subscribe(data=>{
      this.product = data;
      this.setValues();
    })
  }

  setValues(){
    this.title = this.product.title;
    this.price = this.product.price.toString();
    this.stock = this.product.rating.count.toString();
    this.image = this.product.image;
    this.category = this.product.category;
  }
}
