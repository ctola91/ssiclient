import { Injectable } from '@angular/core';
import {API_URL, baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ResponseService} from '../shared/responseService';
import {ProgramSso} from '../shared/programSso';
import {AppUtil} from '../shared/AppUtil';

@Injectable()
export class ProgramssoService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil) { }

  getProgramsSso(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/programssso', { headers: this.appUtil.getHeader()} )
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

  saveProgramSso(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/programssso', params, { headers: this.appUtil.getHeader()})
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

  deleteProgramSso(programSso: ProgramSso): Observable<any> {
    return this.http.delete(baseURL + API_URL + '/programssso/' + programSso.id, { headers: this.appUtil.getHeader()});
  }

  findProgramSsoById(id: number): Observable<any> {
    return this.http.get(baseURL + API_URL + '/programssso/' + id, { headers: this.appUtil.getHeader()})
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

  updateProgramSso(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.put(baseURL + API_URL + '/programssso/' + id, params, { headers: this.appUtil.getHeader()})
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
