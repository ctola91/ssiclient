import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import { User } from '../shared/User';
import { AppUtil } from '../shared/AppUtil';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) { }

  login(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(baseURL + '/login', params, { headers: headers } );
  }

  getListUsers(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/users', { headers: this.appUtil.getHeader() });
  }

  saveUser(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/users', params, { headers: this.appUtil.getHeader()} );
  }

  deleteUser(user: User): Observable<any> {
    const params = JSON.stringify(user);
    return this.http.delete(baseURL + API_URL + '/users/' + user.id, { headers: this.appUtil.getHeader()});
  }

  updateUser(user: any, id: number): Observable<any> {
    const params = JSON.stringify(user);
    return this.http.put(baseURL + API_URL + '/users/' + id, params, { headers: this.appUtil.getHeader() });
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(baseURL + API_URL + '/users/' + id, { headers: this.appUtil.getHeader() });
  }

}
