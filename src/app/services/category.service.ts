import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public _url: string = api_url + 'api/categories/'
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this._url)
  }
}
