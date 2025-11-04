import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly endpoint = 'SEO/GetSeoData';

  constructor(private masterService: MasterService) {}

  getSeoData(pageId : number, pageType: number, languageId: number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}?clientId=${Common.getClientId()}&pageId=${pageId}&Pagetype=${pageType}&languageId=${languageId}`);
  }
}
