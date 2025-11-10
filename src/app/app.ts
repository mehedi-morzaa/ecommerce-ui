import { Component, signal } from '@angular/core';
import { MainLayout } from "./layout/main-layout/main-layout";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-ui');

  constructor(private router: Router) {
  this.router.events.subscribe(e => {
    if (e instanceof NavigationEnd) {
      console.log('Current URL:', e.urlAfterRedirects);
    }
  });
}

}
