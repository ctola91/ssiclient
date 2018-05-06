import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL, API_URL} from '../shared/baseurl';
import {ResponseService} from '../shared/responseService';
import {Trainer} from '../shared/trainer';
import {AppUtil} from '../shared/AppUtil';

@Injectable()
export class TrainerService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) { }

  getTrainers(): Observable<any> {

    return this.http.get(baseURL + API_URL + '/trainerssso',{ headers: this.appUtil.getHeader()})
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
    return this.http.post(baseURL + API_URL + '/trainerssso', params, { headers: this.appUtil.getHeader()})
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
    return this.http.delete(baseURL + API_URL + '/trainerssso/' + trainer.id, { headers: this.appUtil.getHeader()});
  }

  findTrainerById(id: number): Observable<any> {

    return this.http.get(baseURL + API_URL + '/trainerssso/' + id, { headers: this.appUtil.getHeader()})
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

  updateTrainer(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.put(baseURL + API_URL + '/trainerssso/' + id, params, { headers: this.appUtil.getHeader()})
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
