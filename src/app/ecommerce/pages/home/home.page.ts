import { Component } from '@angular/core';
import { PopularProducts } from "../popular-products/popular-products";
import { Categories } from "../categories/categories";

@Component({
  selector: 'page-home',
  imports: [PopularProducts, Categories],
  templateUrl: './home.page.html',
})
export class HomePage {

}
