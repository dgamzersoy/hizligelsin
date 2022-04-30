import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';


import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];

  arrowIcon = faArrowRightLong;

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts()
 } 

  getProducts(){
    this.productService.getAllModels().subscribe(response=>{
      this.products=response
    })
  }

  onClickButton(e:any){
    console.log(this.products);
  }

  navigateDetailPage(id:number){
    this.router.navigateByUrl("products/details/" + id);
  }
}
