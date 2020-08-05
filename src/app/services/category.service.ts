import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  isCategoryVisivle: boolean

  categoryVisibilityChange: Subject<boolean> = new Subject<boolean>()

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public _url: string = api_url
  constructor(private http: HttpClient) { 
    this.categoryVisibilityChange.subscribe((value) => {
      this.isCategoryVisivle = value
    })
  }

  toggleCategoryVisibility() {
    this.categoryVisibilityChange.next(!this.isCategoryVisivle)
  }

  getCategories(): Observable<any> {
    console.log('hello from service')
    return this.http.get(this._url + 'api/categories')
  }
}
