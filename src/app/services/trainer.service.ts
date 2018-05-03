import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL, API_URL} from '../shared/baseurl';
import {log} from 'util';
import {ResponseService} from '../shared/responseService';
import {Personal} from '../shared/Personal';
import {Trainer} from '../shared/trainer';

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

  saveTrainer(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/trainerssso', params, { headers: headers})
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

  deleteTrainer(trainer: Trainer): Observable<any> {
    const params = JSON.stringify(trainer);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/trainerssso/' + trainer.id, { headers: headers});
  }

  findTrainerById(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token);

    return this.http.get(baseURL + API_URL + '/trainerssso/' + id, { headers: headers})
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
