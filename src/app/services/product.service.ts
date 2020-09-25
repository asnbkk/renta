import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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

  public selectedProduct
  public selectedPreview
  
  public _url: string = api_url
  searchRes: [] = []
  searchResChange: Subject<any> = new Subject<any>()
  constructor(private http: HttpClient) { 
    let selectedProduct = localStorage.getItem('selectedProduct')
    if(selectedProduct) this.selectedProduct = JSON.parse(selectedProduct)

    let selectedPreview = localStorage.getItem('selectedPreview')
    if(selectedPreview) this.selectedPreview = JSON.parse(selectedPreview)

    this.searchResChange.subscribe(data => {
      this.searchRes = data
    })
  }
  
  getProducts(subcategory_id): Observable<any> {
    return this.http.post(this._url + 'api/products/subcategory', {subcategory_id: subcategory_id}, this.httpHeaders)
  }

  setProduct(product): Observable<any> {
    return this.http.post(this._url + 'api/products/', product, this.httpHeaders)
  }

  onProductSelect(product) {
    this.selectedProduct = product
    localStorage.setItem('selectedProduct', JSON.stringify(product))
  }
  onProductPreview(product) {
    this.selectedPreview = product
    localStorage.setItem('selectedPreview', JSON.stringify(product))
  }
  
  getProductInfo(productId): Observable<any> {
    return this.http.get(this._url + 'api/products/' + productId)
  }

  Search(query): Observable<any> {
    return this.http.post(this._url + 'api/search/', { query }, this.httpHeaders)
  }
  onSearchResUpdate(res) {
    this.searchResChange.next(res)
  } 
  onDeleteSearchRes() {
    this.searchResChange.next(null)
  }
}
