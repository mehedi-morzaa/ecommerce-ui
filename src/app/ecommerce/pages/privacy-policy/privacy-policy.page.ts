import { Component, OnInit, signal } from '@angular/core';
import { HtmlService } from '../../../services/html.service';
import { HtmlContent } from '../../../models/html-content.model';

@Component({
  selector: 'page-privacy-policy',
  imports: [],
  templateUrl: './privacy-policy.page.html',
})
export class PrivacyPolicyPage implements OnInit {
  /* ========================================================
   🔧 CONSTRUCTOR & DEPENDENCY INJECTION
======================================================== */
  constructor(private htmlService: HtmlService) {}

  /* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
  privacypolicyContent = signal<HtmlContent[] | null>(null);


  /* ========================================================
   🛠️ METHODS
======================================================== */
  LoadTerms() {
    this.htmlService.getListofContent(4, 4, 1).subscribe({
      next: (res) => {
        if (res.success) {
          this.privacypolicyContent.set(res.data);
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
