import { Component, inject, OnInit, signal } from '@angular/core';
import { PopularProducts } from "../popular-products/popular-products";
import { ProductList } from "../product/product-list/product-list";
import { ProductVM } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'page-home',
  imports: [PopularProducts, ProductList],
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
