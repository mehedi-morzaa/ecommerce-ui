import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {
  private readonly endpoint = 'Html';

  constructor(private masterService: MasterService) {}

  getPageInfo(masterId: number, languageId: number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/ListofContent?clientId=${Common.getClientId()}&masterId=${masterId}&languageId=${languageId}`);
  }

  getListofContent(masterId: number, cTypeId: number, languageId: number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/ListofContent?masterId=${masterId}&cTypeId=${cTypeId}&languageId=${languageId}`);
  }

  getSingleContent(masterId: number, cTypeId: number, languageId: number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/SingleContent?masterId=${masterId}&cTypeId=${cTypeId}&languageId=${languageId}`);
  }
}
