import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Contract} from '../shared/Contract';

@Injectable()
export class ContractService {

  constructor(private http: HttpClient) { }

  getListContracts(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/contract', { headers: headers});
  }

  saveContract(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(baseURL + API_URL + '/contract', params, { headers: headers} );
  }
  deleteContract(personal: Contract): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/contract/' + personal.id, { headers: headers});
  }
}
