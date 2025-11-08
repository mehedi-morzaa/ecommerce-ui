import { Component, Input } from '@angular/core';
import { ProductVM } from '../../../../models/product.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,CommonModule],
  templateUrl: './product-card.html',
})
export class ProductCard {
@Input() product!: ProductVM;
}
