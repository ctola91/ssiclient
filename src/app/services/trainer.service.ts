import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURLApiV1} from '../shared/baseurl';

@Injectable()
export class TrainerService {

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURLApiV1 + 'trainerssso', httpOptions )
      .map((res) => {
        return res;
      }).catch(error => {
        console.log('error: ' + error);
        return error;
      });
  }
}
