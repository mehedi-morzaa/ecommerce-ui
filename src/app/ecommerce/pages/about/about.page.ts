import { Component, OnInit, signal } from '@angular/core';
import { HtmlService } from '../../../services/html.service';
import { HtmlContent } from '../../../models/html-content.model';

@Component({
  selector: 'page-about',
  imports: [],
  templateUrl: './about.page.html',
})
export class AboutPage implements OnInit {
  /* ========================================================
   🔧 CONSTRUCTOR & DEPENDENCY INJECTION
======================================================== */
  constructor(private htmlService: HtmlService) {}

  /* ========================================================
   🧩 PROPERTIES (State / Data)
======================================================== */
  introContent = signal<HtmlContent | null>(null);
  providingsContent = signal<HtmlContent[] | null>(null);


  /* ========================================================
   🛠️ METHODS
======================================================== */
  LoadIntro() {
    this.htmlService.getSingleContent(1, 1, 1).subscribe({
      next: (res) => {
        if (res.success) {
          this.introContent.set(res.data);
          console.log(res.data);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  LoadProvidings() {
    this.htmlService.getListofContent(1, 2, 1).subscribe({
      next: (res) => {
        if (res.success) {
          this.providingsContent.set(res.data);
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
    this.LoadIntro();
    this.LoadProvidings();
  }
}
