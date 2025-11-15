import { afterEveryRender, Component, input, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ProductVM } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-product-details',
  imports: [],
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit{
/* ========================================================
   🔧 CONSTRUCTOR & DEPENDENCY INJECTION
======================================================== */
constructor(private productService:ProductService, private activatedRoute:ActivatedRoute){
//   afterEveryRender(()=>{
//     console.log('afterEveryRender');
//     this.loadScript();
// })
}


/* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
productGallery=[
  {src:'assets/imgs/shop/product-16-2.jpg',alt:'product-16-2'},
  {src:'assets/imgs/shop/product-16-1.jpg',alt:'product-16-1'},
  {src:'assets/imgs/shop/product-16-3.jpg',alt:'product-16-3'},
  {src:'assets/imgs/shop/product-16-4.jpg',alt:'product-16-4'},
  {src:'assets/imgs/shop/product-16-5.jpg',alt:'product-16-5'},
  {src:'assets/imgs/shop/product-16-6.jpg',alt:'product-16-6'},
  {src:'assets/imgs/shop/product-16-7.jpg',alt:'product-16-7'},
]

product=signal<ProductVM|null>(null);


/* ========================================================
   🚀 INITIALIZATION
======================================================== */
// loadScript() {
//   const existing = document.querySelector('script[src="assets/js/shop.js"]');
//   if (existing) {
//     existing.remove();  // Remove old script so it can load again
//   }

//   const script = document.createElement('script');
//   script.src = 'assets/js/shop.js';
//   script.async = true;

//   script.onload = () => {
//     console.log('shop.js loaded again');
//   };

//   document.body.appendChild(script);
// }

loadProduct(){
const productId=this.activatedRoute.snapshot.paramMap.get('productId')
console.log('productID: ',productId)
this.productService.getProductDetails(Number(productId)).subscribe({
  next:res=>{
    if(res.success){
      this.product.set(res.data)
    }
    else{
      this.product.set(null)
    }
  },
  error: err => console.error(err),
})
}


/* ========================================================
   🌀 LIFECYCLE HOOKS
======================================================== */
ngOnInit(): void {
  this.loadProduct()

}

}
