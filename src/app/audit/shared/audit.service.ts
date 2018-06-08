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

  getAuditItems(startDate: string, endDate: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/audit/filter?startDate=' + startDate + '&endDate=' + endDate, {headers: headers});
  }

  getAllAuditItems(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/audit', {headers: headers});
  }

}
