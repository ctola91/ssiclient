import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';

@Injectable()
export class KardexService {

  constructor(private http: HttpClient) { }

  getListKardex(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/kardexequipament', { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getListKardexById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/kardexequipament/equip' + id, { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
}
