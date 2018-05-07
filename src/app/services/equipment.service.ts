import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL, API_URL} from '../shared/baseurl';
import {Personal} from '../shared/Personal';
import {Inventory} from '../shared/Inventory';
import {Equipment} from '../shared/Equipment';

import {ResponseService} from '../shared/responseService';

@Injectable()
export class EquipmentService {

  constructor(private http: HttpClient) {
  }

  getListEquipaments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };
    return this.http.get(baseURL + API_URL + '/equipament', httpOptions).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  getListEquipamentsData(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/equipament', {headers: headers});
  }

  getEquipmentById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/equipament/' + id, {headers: headers});
  }

  saveEquipament(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/equipament', params, {headers: headers}).map((res) => {
      return res;
    }).catch(error => {
      console.log('error: ' + error);
      return error;
    });
  }

  deleteEquipment(equipment: Equipment): Observable<any> {
    const params = JSON.stringify(equipment);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.delete(baseURL + API_URL + '/equipament/' + equipment.id, {headers: headers}).map((res) => {
      return res;
    }).catch(err => {
      console.log('error:' + err);
      return err;
    });
  }

  updateEquipment(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.put(baseURL + API_URL + '/equipament/' + id, params, {headers: headers}).map((res) => {
      return res;
    }).catch(err => {
      console.log('error:' + err.toString());
      return err;
    });
  }

  getEquipamentIds(): Observable<number[]> {
    return this.getListEquipaments()
      .map(equipaments => {
        return equipaments.map(equipament => equipament.id);
      });
  }
}
