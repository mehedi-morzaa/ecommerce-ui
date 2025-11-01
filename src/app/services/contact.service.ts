import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly endpoint = 'Contact';

  constructor(private masterService: MasterService) {}

  getContactSubjects(languageId : number = 1) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetContactSubjects?clientId=${Common.getClientId()}&languageId=${languageId}`);
  }

  saveMessage(data: any) : Observable<ApiResponse> {
    data.clientId=Common.getClientId();
    return this.masterService.post<ApiResponse>(`${this.endpoint}/SaveMessage`,data);
  }

  getTestimonials() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}?clientId=${Common.getClientId()}`);
  }
}
