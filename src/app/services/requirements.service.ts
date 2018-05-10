import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Requirements} from '../shared/Requirements';

@Injectable()
export class RequirementsService {

  constructor(private http: HttpClient) { }

  getListRequirements(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(baseURL + API_URL + '/requirement', { headers: headers});
  }
  getRequirementById(personal: number): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.get(baseURL + API_URL + '/requirement/' + personal, { headers: headers});
  }
  saveRequirements(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
                                     .set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(baseURL + API_URL + '/requirement', params, { headers: headers} );
  }

  deleteRequirement(personal: Requirements): Observable<any> {
    const params = JSON.stringify(personal);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/requirement/' + personal.id, { headers: headers});
  }
  updateRequirement(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    console.log(params);
    return this.http.post(baseURL + API_URL + '/requirement', params, { headers: headers} );
  }
}
