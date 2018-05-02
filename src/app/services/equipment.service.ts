import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {ResponseService} from '../shared/responseService';

@Injectable()
export class EquipmentService {

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/equipament', httpOptions )
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
