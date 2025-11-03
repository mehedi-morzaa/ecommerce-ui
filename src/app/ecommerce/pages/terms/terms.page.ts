import { Component, OnInit, signal } from '@angular/core';
import { HtmlService } from '../../../services/html.service';
import { HtmlContent } from '../../../models/html-content.model';

@Component({
  selector: 'page-terms',
  imports: [],
  templateUrl: './terms.page.html',
})
export class TermsPage implements OnInit {

  /* ========================================================
   🔧 CONSTRUCTOR & DEPENDENCY INJECTION
======================================================== */
  constructor(private htmlService: HtmlService) {}

  /* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
  termsContent = signal<HtmlContent[] | null>(null);


  /* ========================================================
   🛠️ METHODS
======================================================== */
  LoadTerms() {
    this.htmlService.getListofContent(3, 4, 1).subscribe({
      next: (res) => {
        if (res.success) {
          this.termsContent.set(res.data);
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
    this.LoadTerms();
  }
}
