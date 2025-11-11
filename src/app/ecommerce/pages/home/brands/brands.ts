import {  Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { BrandVM } from '../../../../models/brand.model';
import { RouterLink } from "@angular/router";
import { Common } from '../../../../shared/utility/common';
import { MediaSourceEnum } from '../../../../shared/enums/media-source-enum';
import { BrandService } from '../../../../services/brand.service';

@Component({
  selector: 'app-brands',
  imports: [RouterLink],
  templateUrl: './brands.html',
})
export class Brands implements OnInit{
  brands = signal<BrandVM[]>([]);
  private brandService = inject(BrandService);

  currentPage = signal(0);
  pageSize = signal(4); // default

  startIndex = computed(() => this.currentPage() * this.pageSize());
  endIndex = computed(() => this.startIndex() + this.pageSize());
  visibleBrands = computed(() => this.brands().slice(this.startIndex(), this.endIndex()));

  ngOnInit(): void {
    this.getAllBrands();
    this.updatePageSize(window.innerWidth); // initial
  }

  getAllBrands() {
    this.brandService.getAll().subscribe({
      next: res => this.brands.set(res.data),
      error: err => console.error(err),
    });
  }

  getImageSrc(path: string) {
    return Common.getImageUrl(path, MediaSourceEnum.Inventory);
  }

  nextPage() {
    if (this.endIndex() < this.brands().length) {
      this.currentPage.set(this.currentPage() + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 0) {
      this.currentPage.set(this.currentPage() - 1);
    }
  }

  // Dynamically adjust page size based on screen width
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updatePageSize(event.target.innerWidth);
  }

private updatePageSize(width: number) {
  if (width < 576) {
    this.pageSize.set(2); // mobile
  }else if (width < 1200) {
    this.pageSize.set(4); // medium desktop
  } else if (width < 1400) {
    this.pageSize.set(6); // large desktop
  } else {
    this.pageSize.set(8); // extra large desktop
  }
  this.currentPage.set(0); // reset to first page when resizing
}

}
