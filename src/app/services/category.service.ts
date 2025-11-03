import { Injectable } from '@angular/core';
import { MasterService } from './common/master.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/common/api-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {  
  
  private readonly baseUrl = environment.inventoryApiUrl;
  private readonly endpoint = 'api/inventory/product/categories';

  constructor(private masterService: MasterService, private http : HttpClient) {}

  getAll() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${this.endpoint}`);
  }
}
