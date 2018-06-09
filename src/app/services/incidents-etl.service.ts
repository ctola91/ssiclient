import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {API_URL, baseURLETL} from '../shared/baseurl';

@Injectable()
export class IncidentsEtlService {

  constructor(private http: HttpClient) { }

  getIncidentsBySeverity(): Observable<any> {
    return this.http.get(baseURLETL + API_URL + '/report/chart/incidents/amounts/severity/');
  }

  getIncidentsByType(): Observable<any> {
    return this.http.get(baseURLETL + API_URL + '/report/chart/incidents/amounts/type/');
  }

  getIncidentsByArea(startDate: string, endDate: string): Observable<any> {
    return this.http.get(baseURLETL + API_URL + '/report/chart/incidents/area?startDate=' + startDate + '&endDate=' + endDate);
  }

  getDetailIncidentsByDate(startDate: string, endDate: string): Observable<any> {
    return this.http.get(baseURLETL + API_URL + '/report/table/incidents?startDate=' + startDate + '&endDate=' + endDate);
  }
}
