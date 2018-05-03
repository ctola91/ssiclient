import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_URL, baseURL} from '../shared/baseurl';
import {ResponseService} from '../shared/responseService';
import {log} from 'util';
import {Position} from '../shared/position';

@Injectable()
export class PositionService {

  constructor(private http: HttpClient) {
  }

  getPositionsTree(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/position/tree/tree', httpOptions)
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

  getPositionById(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/position/' + id, httpOptions)
      .map((res: ResponseService) => {
        if (res.status === 'ok') {
          console.log('data' + res.data);
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

  getPositions(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/position', httpOptions)
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

  getIfHaveChildren(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('token')
      })
    };

    return this.http.get(baseURL + API_URL + '/position/haveChildren/' + id, httpOptions)
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

  savePosition(data: any): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.post(baseURL + API_URL + '/position', params, { headers: headers})
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

  deletePosition(position: Position): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');

    return this.http.delete(baseURL + API_URL + '/position/' + position.id, { headers: headers});
  }

  updatePosition(data: any, id: number): Observable<any> {
    const params = JSON.stringify(data);
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', token)
      .set('Content-Type', 'application/json');
    return this.http.put(baseURL + API_URL + '/position/' + id, params, { headers: headers})
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
