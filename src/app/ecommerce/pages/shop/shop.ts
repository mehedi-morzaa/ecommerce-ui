import { Component, inject } from '@angular/core';
import { ProductList } from "../product/product-list/product-list";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, of, switchMap } from 'rxjs';
import { ProductVM } from '../../../models/product.model';
import { ApiResponse } from '../../../models/common/api-response.model';

@Component({
  selector: 'app-shop',
  imports: [ProductList],
  templateUrl: './shop.html',
})
export class Shop {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService)

productList = toSignal(
  this.route.paramMap.pipe(
    switchMap(params => {
      const categoryId = params.get('categoryId');
      const brandId = params.get('brandId');

      if (categoryId) return this.productService.getAllByCategoryId(+categoryId);
      if (brandId) return this.productService.getAllByBrandId(+brandId);

      return of({ success: true, data: [], message: '', errors: [], statusCode: 200 });
    }),
    map((response: ApiResponse): ProductVM[] => {
      return Array.isArray(response.data) ? response.data : [];
    })
  ) as Observable<ProductVM[]>,
  {
    initialValue: [],
  }
);



}
