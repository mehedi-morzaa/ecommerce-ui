import { afterEveryRender, Component, signal } from '@angular/core';
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
    afterEveryRender(()=>{
    console.log('afterEveryRender');
    this.loadScript();
})
}

  loadScript() {
  const existing = document.querySelector('script[src="assets/js/main.js"]');
  if (existing) {
    existing.remove();  // Remove old script so it can load again
  }

  const script = document.createElement('script');
  script.src = 'assets/js/main.js';
  script.async = true;

  script.onload = () => {
    console.log('main.js loaded again');
  };

  document.body.appendChild(script);
}

}
