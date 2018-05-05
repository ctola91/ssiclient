import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {API_URL, baseURL} from '../shared/baseurl';
import {Inventory} from '../shared/Inventory';

@Injectable()
export class InventoryService {

  constructor(private http: HttpClient) { }
  getListInventories(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/inventory', { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  saveInventory(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/inventory', params, { headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }
  deleteInventory(inventory: Inventory): Observable<any> {
    const params = JSON.stringify(inventory);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.delete(baseURL + API_URL + '/inventory/' + inventory.id, { headers: headers}).map((res) => {
      return res;
    }).catch(err => {
      console.log('error:' + err);
      return err;
    });
  }
 }


