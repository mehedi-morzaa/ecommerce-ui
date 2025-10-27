import { Component } from '@angular/core';
import { PopularProducts } from "../popular-products/popular-products";
import { Categories } from "../categories/categories";

@Component({
  selector: 'app-master-page',
  imports: [PopularProducts, Categories],
  templateUrl: './master-page.html',
})
export class MasterPage {

}
