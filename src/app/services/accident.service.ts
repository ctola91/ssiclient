import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL, baseURL} from '../shared/baseurl';

@Injectable()
export class AccidentService {

  constructor(private http: HttpClient) { }

  getListAccidents(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    const res = this.http.get(baseURL + API_URL + '/accident', { headers: headers});
    console.log(res);
    return res;
  }
}
