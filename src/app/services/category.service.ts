import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {  
  
  private readonly endpoint = 'inventory/product';

  constructor(private masterService: MasterService) {}

  getAll() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.EcommerceGatewayBaseApiUrl,`${this.endpoint}/categories`);
  }
  getAllByBrandId(brandId: number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.EcommerceGatewayBaseApiUrl,`${this.endpoint}/categories/${brandId}`);
  }
}
