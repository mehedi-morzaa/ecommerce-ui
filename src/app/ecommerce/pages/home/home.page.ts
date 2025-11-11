import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductVM } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';
import { Brands } from "./brands/brands";
import { PopularProducts } from "../popular-products/popular-products";

@Component({
  selector: 'page-home',
  imports: [Brands, PopularProducts],
  templateUrl: './home.page.html',
})
export class HomePage implements OnInit{
  productList = signal<ProductVM[]>([]) ;

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.getProductsByCategoryId();
  }
  getProductsByCategoryId(){
    this.productService.getAllByCategoryId().subscribe({
      next: res => {
        this.productList.set(res.data);
      },
      error: err => console.log(err)
    })
  }

}
