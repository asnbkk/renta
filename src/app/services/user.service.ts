import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  
  public _url: string = api_url
  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post(this._url + '/api/user/login', { user: user }, this.httpHeaders)
  }

  registration(user): Observable<any> {
    return this.http.post(this._url + '/api/user/signup', { user: user }, this.httpHeaders)
  }
}
