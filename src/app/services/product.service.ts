import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { MasterService } from './common/master.service';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly endpoint = 'inventory';

  constructor(private masterService: MasterService) {}

  getAllByCategoryId(id: number = 0) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.EcommerceGatewayBaseApiUrl,`${this.endpoint}/getall-by-categoryid?categoryId=${id}`);
  }
}
