import { Routes } from '@angular/router';
import { HomePage } from './ecommerce/pages/home/home.page';
import { AboutPage } from './ecommerce/pages/about/about.page';
import { ContactPage } from './ecommerce/pages/contact/contact.page';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'about', component: AboutPage},
    {path: 'contact', component: ContactPage},
];
