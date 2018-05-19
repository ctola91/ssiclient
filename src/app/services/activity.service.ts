import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Activity} from '../shared/Activity';
import {ResponseService} from '../shared/responseService';
import {AppUtil} from '../shared/AppUtil';

@Injectable()
export class ActivityService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) { }

  getListActivities(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/activities', { headers: this.appUtil.getHeader()});
  }

  saveActivitySso(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/activities', params, { headers: this.appUtil.getHeader()})
      .map((res: ResponseService) => {
        if (res.status === 'ok') {
          return res.data;
        } else {
          console.log('error: ' + res.status);
          return [];
        }
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  deleteActivity(activity: Activity): Observable<any> {
    const params = JSON.stringify(activity);
    return this.http.delete(baseURL + API_URL + '/activities/' + activity.id, { headers: this.appUtil.getHeader()});
  }

  findActivityById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get(baseURL + API_URL + '/activities/' + id, { headers: headers})
      .map((res: ResponseService) => {
        if (res.status === 'ok') {
          return res.data;
        } else {
          console.log('error: ' + res.status);
          return [];
        }
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  updateActivitySso(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.put(baseURL + API_URL + '/activities/' + id, params, { headers: headers})
      .map((res: ResponseService) => {
        if (res.status === 'ok') {
          return res.data;
        } else {
          console.log('error: ' + res.status);
          return [];
        }
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }

  createNewActivitySso(data: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/activities', data, { headers: headers } );
  }
}
