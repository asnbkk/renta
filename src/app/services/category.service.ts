import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public passedCategory

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public _url: string = api_url
  constructor(private http: HttpClient) { 
  }

  getCategories(): Observable<any> {
    return this.http.get(this._url + 'api/categories')
  }

  setCategory(category): Observable<any> {
    return this.http.post(this._url + 'api/categories', { category },this.httpHeaders)
  }
}
