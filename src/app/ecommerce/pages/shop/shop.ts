import { AfterViewInit, Component, computed, effect, Inject, inject, PLATFORM_ID, signal } from '@angular/core';
import { ProductList } from "../product/product-list/product-list";
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable, of, switchMap } from 'rxjs';
import { ProductVM } from '../../../models/product.model';
import { ApiResponse } from '../../../models/common/api-response.model';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';
import { BrandVM } from '../../../models/brand.model';

declare const window: any;

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    ProductList,
    CommonModule
  ],
  templateUrl: './shop.html',
})
export class Shop implements AfterViewInit {

sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'priceAsc' },
  { label: 'Price: High to Low', value: 'priceDesc' }
];

  selectedSort = signal('featured');
  categoryList =signal<Category[]>([]);
  brandList =signal<BrandVM[]>([]);
  viewMode = signal<'category' | 'brand' | 'none'>('none');
  
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private brandService = inject(BrandService)

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

  readonly routeParams = toSignal(this.route.paramMap);

  readonly syncFilters = effect(() => {
    const params = this.routeParams();
    const categoryId = params?.get('categoryId');
    const brandId = params?.get('brandId');

    if(categoryId){
      this.brandService.getAllByCategoryId(+categoryId).subscribe({
        next: res => {
          this.brandList.set(res.data);
          this.viewMode.set(this.brandList().length > 0 ? 'brand' : 'none') ;
        },
        error: err => console.warn(err)
      })
    }else if(brandId){
      this.categoryService.getAllByBrandId(+brandId).subscribe({
        next: res => {
          this.categoryList.set(res.data);
          this.viewMode.set(this.categoryList().length > 0 ? 'category' : 'none') ;
        },
        error: err => console.warn(err)
      })
    }else{
      this.viewMode.set('none')
    }
  })

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    setTimeout(() => {
      if (typeof window.initSortByDropdown === 'function') {
        window.initSortByDropdown();
      }
      if (typeof window.initSidebarEnhancements === 'function') {
        window.initSidebarEnhancements();
      }
    }, 1000);
    }
  }


  // for sorting
  getSelectedSortLabel(): string {
    const selected = this.sortOptions.find(opt => opt.value === this.selectedSort());
    return selected?.label ?? 'Sort';
  }

  onSortChange(event: Event, value: string): void {
    event.preventDefault();
    this.selectedSort.set(value);
  }

  sortedProductList = computed(() => {

    const sort = this.selectedSort();
    const products = [...this.productList()]; // clone to avoid mutation

    switch (sort) {
      case 'priceAsc':
        return products.sort((a, b) => a.basePrice - b.basePrice);
      case 'priceDesc':
        return products.sort((a, b) => b.basePrice - a.basePrice);
      default:
        return products; // featured or default
    }
});


}
