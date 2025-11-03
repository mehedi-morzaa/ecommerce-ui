import { Component, OnInit, signal } from '@angular/core';
import { HtmlService } from '../../../services/html.service';
import { HtmlContent } from '../../../models/html-content.model';

@Component({
  selector: 'page-purchase-guide',
  imports: [],
  templateUrl: './purchase-guide.page.html',
})
export class PurchaseGuidePage implements OnInit{
/* ========================================================
   🔧 CONSTRUCTOR & DEPENDENCY INJECTION
======================================================== */
  constructor(private htmlService: HtmlService) {}

  /* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
  purchaseguideContent = signal<HtmlContent[] | null>(null);


  /* ========================================================
   🛠️ METHODS
======================================================== */
  LoadPurchaseGuidline() {
    this.htmlService.getListofContent(5, 4, 1).subscribe({
      next: (res) => {
        if (res.success) {
          this.purchaseguideContent.set(res.data);
          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }



  /* ========================================================
   🌀 LIFECYCLE HOOKS
======================================================== */
  ngOnInit(): void {
    this.LoadPurchaseGuidline();
  }
}
