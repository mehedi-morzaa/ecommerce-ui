import { Component, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductVM } from '../../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, CommonModule],
  templateUrl: './product-list.html',
})
export class ProductList {
  @Input() products: ProductVM[] = [];
}
