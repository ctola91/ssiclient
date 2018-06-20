import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {API_URL, baseURL, baseURLETL} from '../../shared/baseurl';
import {ResponseService} from '../../shared/responseService';

@Injectable()
export class IncidentService {

  constructor(private http: HttpClient) { }

  getIncidentById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/incidents/' + id, {headers: headers});
  }

  getIncidentList(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/incidents', {headers: headers});
  }

  createNewIncident(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/incidents', data, { headers: headers } );
  }

  updateIncident(data: any, id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.put(baseURL + API_URL + '/incidents/' + id, data, {headers: headers});
  }

  deleteIncident(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.delete(baseURL + API_URL + '/incidents/' + data.incidentId, {headers: headers});
  }
}
