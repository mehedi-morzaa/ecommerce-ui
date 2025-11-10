import { BaseVM } from "./base.model";

export interface BrandVM extends BaseVM{
  name?: string | null;
  thumbImage?: string | null;
  webSite?: string | null;
  brandTypeId: number;
  productCount: number; 
}
