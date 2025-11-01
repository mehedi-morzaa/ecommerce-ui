import { Injectable } from '@angular/core';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { MasterService } from './common/master.service';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class SocialProfileService {
  private readonly endpoint = 'SocialProfile';

  constructor(private masterService: MasterService) {}

  getSocialProfile() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetSocialProfileByClient?clientId=${Common.getClientId()}`);
  }
}
