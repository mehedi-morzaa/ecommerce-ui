import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly endpoint = 'Misc';

  constructor(private masterService: MasterService) {}

  getClientInfo() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}/ClientInfo?clientId=${Common.getClientId()}`);
  }
}
