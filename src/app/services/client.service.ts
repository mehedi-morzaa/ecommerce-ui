import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly endpoint = 'Misc';

  constructor(private masterService: MasterService) {}

  getClient() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(Common.CmsBaseApiUrl,`${this.endpoint}/ClientInfo?clientId=${Common.getClientId()}`);
  }

}
