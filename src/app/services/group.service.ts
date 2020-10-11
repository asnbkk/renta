import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { api_url } from '../../assets/env'

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public _url: string = api_url
  constructor(private http: HttpClient) {}

  setGroup(name): Observable<any> {
    return this.http.post(this._url + 'api/groups', { name }, this.httpHeaders)
  }

  getGroups(name): Observable<any> {
    return this.http.get(this._url + 'api/groups')
  }
}
