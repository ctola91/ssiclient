import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL, baseURL} from '../shared/baseurl';
import {ResponseService} from '../shared/responseService';
import {log} from 'util';

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/department', httpOptions)
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
