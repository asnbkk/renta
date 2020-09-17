import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_url } from '../../assets/env'
import { ThrowStmt } from '@angular/compiler';

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

  setProduct(product): Observable<any> {
    return this.http.post(this._url + 'api/products/', product, this.httpHeaders)
  }
  
  getProductInfo(productId): Observable<any> {
    return this.http.get(this._url + 'api/products/' + productId)
  }

  Search(query): Observable<any> {
    return this.http.post(this._url + 'search/', { query }, this.httpHeaders)
  }
}
