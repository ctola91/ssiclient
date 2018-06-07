import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {API_URL, baseURL} from '../../shared/baseurl';

@Injectable()
export class AuditService {

  constructor(private http: HttpClient) {

  }

  getAuditItems(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/' + id, {headers: headers});
  }

}
