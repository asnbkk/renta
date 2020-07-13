import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public _url: string = api_url
  constructor(private http: HttpClient) { }
  getProducts(subcategory_id): Observable<any> {
    return this.http.post(this._url + 'api/products/subcategory', {subcategory_id: subcategory_id}, this.httpHeaders)
  }
}