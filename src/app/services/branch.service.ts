import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { ApiResponse } from '../models/common/api-response.model';
import { Observable } from 'rxjs';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private readonly endpoint = 'Branch';

  constructor(private masterService: MasterService) {}

  getOffices() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetOffices?clientId=${Common.getClientId()}`);
  }

  getOpeningHours(branchId:number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/OpeningHours?branchId=${branchId}`);
  }

  getTeam(deptId : number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetTeam?clientId=${Common.getClientId()}&deptId=${deptId}`);
  }
}
