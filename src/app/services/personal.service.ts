import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Personal} from '../shared/Personal';
import {ResponseService} from '../shared/responseService';
import {AppUtil} from '../shared/AppUtil';

@Injectable()
export class PersonalService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) { }

  getListPersonals(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/personal', { headers: this.appUtil.getHeader() });
  }

  savePersonal(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/personal/save', params, { headers: this.appUtil.getHeader()} );
  }

  deletePersonal(personal: Personal): Observable<any> {
    const params = JSON.stringify(personal);
    return this.http.delete(baseURL + API_URL + '/personal/' + personal.id, { headers: this.appUtil.getHeader()});
  }

  getPersonalById(id: number): Observable<any> {
    return this.http.get(baseURL + API_URL + '/personal/getPersonalById/' + id, { headers: this.appUtil.getHeader() });
  }

  updatePersonal(personal: any, id: number): Observable<any> {
    const params = JSON.stringify(personal);
    return this.http.put(baseURL + API_URL + '/personal/update/' + id, params, { headers: this.appUtil.getHeader() });
  }

  getListAllPersonal(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/personal/listPersonal', { headers: this.appUtil.getHeader() });
  }

  getIfHavePersonalByArea(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/personal/havePersonalByArea/' + id, httpOptions)
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
