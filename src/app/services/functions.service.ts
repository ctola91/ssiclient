import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Functions} from '../shared/Functions';

@Injectable()
export class FunctionsService {

  constructor(private http: HttpClient) { }

  getAllFunctionPositions(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/function', { headers: headers});
  }
  getFunctionById(personal: number): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.get(baseURL + API_URL + '/function/' + personal, { headers: headers});
  }
    saveFunctions(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(baseURL + API_URL + '/function', params, { headers: headers} );
  }

  deleteFunctions(personal: Functions): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/function/' + personal.id, { headers: headers});
  }
  updateFunctions(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(baseURL + API_URL + '/function', params, { headers: headers} );
  }
}
