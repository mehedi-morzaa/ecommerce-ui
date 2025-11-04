import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) {}

  // GET request method
  get<T>(baseUrl: string, endpoint: string): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.get<T>(url);
  }

  // POST request method
  post<T>(baseUrl: string, endpoint: string, data: any): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.post<T>(url, data);
  }

  // PUT request method
  put<T>(baseUrl: string, endpoint: string, data: any): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.put<T>(url, data);
  }

  // DELETE request method
  delete<T>(baseUrl: string, endpoint: string): Observable<T> {
    const url = `${baseUrl}/${endpoint}`;
    return this.http.delete<T>(url);
  }
}
