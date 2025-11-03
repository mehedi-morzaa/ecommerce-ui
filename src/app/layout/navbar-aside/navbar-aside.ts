import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, PLATFORM_ID, inject, signal, computed } from '@angular/core';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-navbar-aside',
  imports: [CommonModule],
  templateUrl: './navbar-aside.html',
  styleUrl: './navbar-aside.css',
})
export class NavbarAside implements OnInit, AfterViewInit{

  categories = signal<Category[]>([]);      // list from API
  categoryTree = computed( () => this.buildCategoryTree(this.categories()));    // hierarchical list

  private platformId = inject(PLATFORM_ID);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {

    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAll().subscribe({
      next : res => {
        this.categories.set(res.data);
      },
      error : err => console.warn(err)
    })
  }

  buildCategoryTree(categories: Category[]): Category[] {
    const map = new Map<number, Category>();

    // Create map and initialize children
    categories.forEach(c => {
      map.set(c.id, { ...c, children: [] });
    });

    // Build the tree 
    const tree: Category[] = [];

    categories.forEach(c => {
      const node = map.get(c.id)!;
      if (c.parentCategoryId != null && map.has(c.parentCategoryId)) {
        map.get(c.parentCategoryId)!.children!.push(node);
      } else {
        tree.push(node);
      }
    });
    return tree;
  }

   ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      this.bindMenuToggle();
      this.bindNestedSubmenuToggle();
      this.bindOverlayClick();

      const observer = new MutationObserver(() => {
        this.bindMenuToggle();
        this.bindNestedSubmenuToggle();
        this.bindOverlayClick();
      });

      observer.observe(this.el.nativeElement, {
        childList: true,
        subtree: true,
        characterData: true
      });
    } else {
      console.log('viewInit skipped on server (SSR)');
    }
  }

  private bindMenuToggle(): void {
    const menuLinks = this.el.nativeElement.querySelectorAll('.menu-item.has-submenu .menu-link');

    menuLinks.forEach((link: HTMLElement) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();

        const submenu = link.nextElementSibling as HTMLElement;
        const parent = link.closest('.has-submenu');
        const siblings = parent?.parentElement?.querySelectorAll('.has-submenu');

        siblings?.forEach((sibling: Element) => {
          if (sibling !== parent) {
            const otherSubmenu = sibling.querySelector('.submenu') as HTMLElement;
            if (otherSubmenu) otherSubmenu.style.display = 'none';
          }
        });

        if (submenu) {
          const isHidden = submenu.style.display === 'none' || submenu.style.display === '';
          submenu.style.display = isHidden ? 'block' : 'none';
        }
      });
    });
  }

  private bindNestedSubmenuToggle(): void {
    const nestedToggles = this.el.nativeElement.querySelectorAll('.submenu-group .submenu-toggle');

    nestedToggles.forEach((toggle: HTMLElement) => {
      toggle.addEventListener('click', (e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        const group = toggle.closest('.submenu-group');
        const submenu = group?.querySelector('.submenu-nested');

        const siblings = group?.parentElement?.querySelectorAll('.submenu-group');
        siblings?.forEach((sibling: Element) => {
          if (sibling !== group) {
            sibling.classList.remove('active');
            const nested = sibling.querySelector('.submenu-nested') as HTMLElement;
            if (nested) nested.style.display = 'none';
          }
        });

        group?.classList.toggle('active');

        if (submenu && submenu instanceof HTMLElement) {
          const isVisible = submenu.style.display === 'block';
          submenu.style.display = isVisible ? 'none' : 'block';
        }
      });
    });
  }

  toggleAsideMini(): void {
    if (window.innerWidth < 768) {
      console.log('toggle aside mini called');
      this.renderer.removeClass(document.body, 'aside-mini');
      this.renderer.removeClass(document.body, 'offcanvas-active');

      const aside = document.querySelector('.navbar-aside');
      const overlay = document.querySelector('.screen-overlay');

      console.log(aside);
      console.log(overlay);

      if (aside) this.renderer.removeClass(aside, 'show');
      if (overlay) this.renderer.removeClass(overlay, 'show');
    } else {
      document.body.classList.toggle('aside-mini');
    }
  }

  private bindOverlayClick(): void {
    const overlay = document.querySelector('.screen-overlay');
    if (!overlay) return;

    overlay.addEventListener('click', () => {
      this.closeSidebar(); // your custom logic
    });
  }

  private closeSidebar(): void {
    const aside = document.querySelector('.navbar-aside');
    const overlay = document.querySelector('.screen-overlay');

    if (aside) aside.classList.remove('show');
    if (overlay) overlay.classList.remove('show');
    document.body.classList.remove('offcanvas-active');
  }


  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth < 768) {
      this.renderer.removeClass(document.body, 'aside-mini');
    }
  }

}
