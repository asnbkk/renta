import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  public _url: string = ''
  constructor(private http: HttpClient) { }

  login(user): Observable<any> {
    return this.http.post(this._url, { user: user }, this.httpHeaders)
  }

  registration(user): Observable<any> {
    return this.http.post(this._url, { user: user }, this.httpHeaders)
  }
}
