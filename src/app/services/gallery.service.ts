import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private readonly endpoint = 'Gallery';

  constructor(private masterService: MasterService) {}

  getGallery(galleryId : number) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetGallery?clientId=${Common.getClientId()}&galleryId=${galleryId}`);
  }
}
