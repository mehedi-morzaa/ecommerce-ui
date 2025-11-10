import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly endpoint = 'inventory/product';

  constructor(private masterService: MasterService) {}

  getAllByCategoryId(categoryId: number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.EcommerceGatewayBaseApiUrl,`${this.endpoint}/brands/${categoryId}`);
  }
}
