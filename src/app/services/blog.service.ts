import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { Common } from '../shared/utility/common';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly endpoint = 'Blog';

  constructor(private masterService: MasterService) {}

  getAllBlog() : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetAllBlogs?clientId=${Common.getClientId()}`);
  }

  getBlogDetails(masterId : number, languageId : number = 2) : Observable<ApiResponse> {
    return this.masterService.get<ApiResponse>(`${this.endpoint}/GetBlogDetails?masterId=${masterId}&languageId=${languageId}`);
  }
}
