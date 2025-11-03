import { Component } from '@angular/core';
import { Categories } from "../../ecommerce/pages/categories/categories";

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {


  toggleMobileSidebar(triggerSelector: string): void {
    const target = document.querySelector(triggerSelector);
    if (target) {
      target.classList.toggle('show');
      document.body.classList.toggle('offcanvas-active');

      const overlay = document.querySelector('.screen-overlay');
      if (overlay) overlay.classList.toggle('show');
    }
  }

}
