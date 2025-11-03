export interface Category {
  categoryId: string;
  categoryName: string;
  secondaryName: string;
  parentCategoryId: number | null;
  catLevel: number;
  thumbImage: string | null;
  iconImage: string | null;
  imageAltText: string | null;
  productCount: number;
  id: number;
  createDate: string;
  createdBy: number;
  editDate: string | null;
  editedBy: number | null;
  entityStatusText: string;
  children?: Category[]; // optional - for hierarchical data
}
