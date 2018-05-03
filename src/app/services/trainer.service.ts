import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL, API_URL} from '../shared/baseurl';
import {log} from 'util';
import {ResponseService} from '../shared/responseService';

@Injectable()
export class TrainerService {

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/trainerssso', httpOptions )
      .map((res: ResponseService) => {
        if(res.status === 'ok'){
          return res.data;
        }
        else {
          console.log('error: ' + res.status);
          return [];
        }

      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}
