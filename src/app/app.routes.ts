import { Routes } from '@angular/router';
import { HomePage } from './ecommerce/pages/home/home.page';
import { AboutPage } from './ecommerce/pages/about/about.page';
import { ContactPage } from './ecommerce/pages/contact/contact.page';
import { TermsPage } from './ecommerce/pages/terms/terms.page';
import { PrivacyPolicyPage } from './ecommerce/pages/privacy-policy/privacy-policy.page';
import { NotFoundPage } from './ecommerce/pages/not-found/not-found.page';
import { PurchaseGuidePage } from './ecommerce/pages/purchase-guide/purchase-guide.page';
import { Shop } from './ecommerce/pages/shop/shop';
import { ProductDetails } from './ecommerce/pages/product-details/product-details';

export const routes: Routes = [
    {path: '', component: HomePage, pathMatch: 'full'},
    {path: 'about', component: AboutPage},
    {path: 'contact', component: ContactPage},
    {path: 'terms', component: TermsPage},
    {path: 'privacy-policy', component: PrivacyPolicyPage},
    {path: 'purchase-guide', component: PurchaseGuidePage},
    {path: 'shop/category/:categoryId', component: Shop},
    {path: 'shop/brand/:brandId', component: Shop},
    {path: 'shop/product-details/:productId', component: ProductDetails},
    {path: '**', component: NotFoundPage},
];
