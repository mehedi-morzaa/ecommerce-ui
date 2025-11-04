import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private readonly endpoint = 'General';

  constructor(private masterService: MasterService) {}

  getAllServices(categoryId : number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}/GetAllServices?clientId=${Common.getClientId()}&categoryId=${categoryId}`);
  }

  getContents(serviceMasterId : number, languageId : number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}?serviceMasterId=${serviceMasterId}&languageId=${languageId}`);
  }

  getAllBusiness(categoryId : number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}/GetAllBusiness?clientId=${Common.getClientId()}&categoryId=${categoryId}`);
  }
}
