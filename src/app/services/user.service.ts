import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  isAuthorized
  isAuthorizedChange: Subject<any> = new Subject<any>()      

  public _url: string = api_url
  constructor(private http: HttpClient) {
    this.isAuthorizedChange.subscribe((value) => {
      this.isAuthorized = value
    })
  }

  login(user): Observable<any> {
    // this.isAuthorizedChange.next(user)
    return this.http.post(this._url + '/api/user/login', { user: user }, this.httpHeaders)
  }

  registration(user): Observable<any> {
    // this.isAuthorizedChange.next(user)
    return this.http.post(this._url + '/api/user/signup', { user: user }, this.httpHeaders)
  }

  logout() {
    this.isAuthorizedChange.next(null)
    console.log(this.isAuthorized)
    localStorage.removeItem('username')
  }
}
