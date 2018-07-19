import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Resource} from '../shared/Resource';
import {ResponseService} from '../shared/responseService';
import {AppUtil} from '../shared/AppUtil';


@Injectable()
export class ResourceService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) {
  }

  getListResources(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/resources', {headers: this.appUtil.getHeader()});
  }

  saveResourceSso(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/resources', params, { headers: this.appUtil.getHeader()})
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
  deleteResource(resource: Resource): Observable<any> {
    const params = JSON.stringify(resource);
    return this.http.delete(baseURL + API_URL + '/resources/' + resource.id, {headers: this.appUtil.getHeader()});
  }

  findResourceById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get(baseURL + API_URL + '/resources/' + id, {headers: headers})
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

  updateResourceSso(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.put(baseURL + API_URL + '/resources/' + id, params, { headers: headers})
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


}



