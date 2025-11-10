import { BaseVM } from "./base.model";


export interface ProductVM extends BaseVM {
  // master info
  productId: number;
  productName: string;
  productDescription: string | null;
  secondaryProductName: string | null;
  secondaryProductDescription: string | null;
  productCategoryName: string | null;
  brandName: string | null;

  // variant info
  productVariantId: number;
  productVariantName: string;
  secondaryProductVariantName: string | null;
  barCode: string | null;
  safetyStock: number | null;
  reOrderingStock: number | null;
  sku: string;
  variantBy: string | null;
  variantValue: string | null;
  expiryDate: string | null;

  // stock
  stockQty: number;
  isInStock: boolean;

  // promotion
  isOnPromotion: boolean;
  promotionType: number;
  promotionTitle: string | null;
  discount: number;
  flatAmount: number;
  requiredQty: number;
  discountedQty: number;
  promotionEndDate: string | null;

  // pricing
  basePrice: number;
  latestPrice: number;
}
