import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, PLATFORM_ID, inject } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-navbar-aside',
  imports: [CommonModule],
  templateUrl: './navbar-aside.html',
  styleUrl: './navbar-aside.css',
})
export class NavbarAside implements OnInit, AfterViewInit{

  categories: Category[] = [];      // list from API
  categoryTree: Category[] = [];    // hierarchical list

  private platformId = inject(PLATFORM_ID);
  private renderer = inject(Renderer2);
  private el = inject(ElementRef);

  ngOnInit(): void {

    this.categories = [
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Personal Care",
      "secondaryName": "প্রসাধন সামগ্রী",
      "parentCategoryId": null,
      "catLevel": 1,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 4,
      "id": 3,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Cleaning Supplies  ",
      "secondaryName": "পরিষ্কারের সামগ্রী",
      "parentCategoryId": null,
      "catLevel": 1,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 4,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Fruit & Vegetable ",
      "secondaryName": "ফল এবং সবজি",
      "parentCategoryId": 1,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 5,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Fresh Fruit ",
      "secondaryName": "তাজা ফল",
      "parentCategoryId": 5,
      "catLevel": 3,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 6,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Food",
      "secondaryName": "খাবার সামগ্রী",
      "parentCategoryId": null,
      "catLevel": 1,
      "thumbImage": "Content/UploadImages/ProductCategories/Angular.png",
      "iconImage": null,
      "imageAltText": "Food",
      "productCount": 4,
      "id": 1,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "00000000-0000-0000-0000-000000000000",
      "categoryName": "Bravarage",
      "secondaryName": "পানীয়",
      "parentCategoryId": 1,
      "catLevel": 2,
      "thumbImage": "Content/UploadImages/ProductCategories/item2.jpg",
      "iconImage": null,
      "imageAltText": "xyz",
      "productCount": 0,
      "id": 2,
      "createDate": "10/20/2025",
      "createdBy": 0,
      "editDate": "10/20/2025",
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "849477ee-9525-4746-9c3d-4813822f7c4d",
      "categoryName": "Cooking",
      "secondaryName": "রান্নাবান্না",
      "parentCategoryId": 1,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 7,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "08687ada-d038-4989-a55b-7254ca79cdff",
      "categoryName": "Sauces & Pickles",
      "secondaryName": "সস এবং আচার",
      "parentCategoryId": 1,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 8,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "34230fa7-06f3-45b6-a1fb-9f1838057eae",
      "categoryName": "Dairy & Eggs",
      "secondaryName": "দুগ্ধজাত দ্রব্য এবং ডিম",
      "parentCategoryId": 1,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 9,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "f557353e-a411-49b7-b67c-39d1faa4d18c",
      "categoryName": "Women's Care",
      "secondaryName": "মহিলাদের ব্যবহার্য",
      "parentCategoryId": 3,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 10,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "3f5ba86a-bf2f-4bf8-a14e-f26acd50aecc",
      "categoryName": "Mens Care",
      "secondaryName": "পুরুষদের ব্যবহার্য",
      "parentCategoryId": 3,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 11,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "3f5ba86a-bf2f-4bf8-a14e-f26acd50aecc",
      "categoryName": "Mens Care 2",
      "secondaryName": "পুরুষদের ব্যবহার্য",
      "parentCategoryId": 3,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 111,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "654900b7-25b7-4127-997c-20b2bcab22af",
      "categoryName": "Pet Care",
      "secondaryName": "পোষা প্রাণীর সামগ্রী",
      "parentCategoryId": null,
      "catLevel": 1,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 12,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "0b380344-ba6a-47f9-a73f-7e0f705d6ebf",
      "categoryName": "Baby Care",
      "secondaryName": "শিশুদের ব্যবহার্য",
      "parentCategoryId": null,
      "catLevel": 1,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 13,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "aca1eb0e-7e53-4b29-9a0b-88ffda9c6ff3",
      "categoryName": "Diapers",
      "secondaryName": "ডায়পার",
      "parentCategoryId": 13,
      "catLevel": 2,
      "thumbImage": null,
      "iconImage": null,
      "imageAltText": null,
      "productCount": 0,
      "id": 14,
      "createDate": "10/21/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    },
    {
      "categoryId": "c6b08db6-c6bc-48a2-b5f5-a4dd26a27dfd",
      "categoryName": "Face Wash",
      "secondaryName": "Face Wash",
      "parentCategoryId": 10,
      "catLevel": 3,
      "thumbImage": "Content/UploadImages/ProductCategories/item4.jpg",
      "iconImage": null,
      "imageAltText": "Face Wash",
      "productCount": 0,
      "id": 15,
      "createDate": "11/2/2025",
      "createdBy": 0,
      "editDate": null,
      "editedBy": null,
      "entityStatusText": "Active"
    }
  ];

    this.categoryTree = this.buildCategoryTree(this.categories);
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

      const observer = new MutationObserver(() => {
        this.bindMenuToggle();
        this.bindNestedSubmenuToggle();
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

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth < 768) {
      this.renderer.removeClass(document.body, 'aside-mini');
    }
  }

}
