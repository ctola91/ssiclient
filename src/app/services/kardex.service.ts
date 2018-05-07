import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Kardex} from '../shared/Kardex';

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
    return this.http.get(baseURL + API_URL + '/kardexequipament/' + id, { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  saveKardex(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/kardexequipament', params, { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  deleteKardex(kardex: Kardex): Observable<any> {
    const params = JSON.stringify(kardex);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.delete(baseURL + API_URL + '/kardexequipament/' + kardex.id, { headers: headers}).map((res) => {
      return res;
    }).catch(err => {
      console.log('error:' + err);
      return err;
    });
  }
  getListKardexByIdEquip(idEqui: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/kardexequipament/equip/' + idEqui, { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
}
