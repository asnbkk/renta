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

  isAuthorized = localStorage.getItem('email') || null
  isAuthorizedChange: Subject<any> = new Subject<any>()      

  public _url: string = api_url
  constructor(private http: HttpClient) {
    this.isAuthorizedChange.subscribe((value) => {
      this.isAuthorized = value
    })
  }

  login(user): Observable<any> {
    return this.http.post(this._url + 'api/user/login', { user: user }, this.httpHeaders)
  }

  registration(user): Observable<any> {
    return this.http.post(this._url + 'api/user/signup', { user: user }, this.httpHeaders)
  }

  logout() {
    this.isAuthorizedChange.next(null)
    localStorage.removeItem('username')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
