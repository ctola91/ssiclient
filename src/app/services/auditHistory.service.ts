import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { baseURL, API_URL } from '../shared/baseurl';
import {Contract} from '../shared/Contract';
import {AppUtil} from '../shared/AppUtil';
import {ToastrService} from 'ngx-toastr';
import { TITLE_MSG_CONTRACT, MSG_CONTRACT_BODY_DELETE } from '../shared/Messages';

@Injectable()
export class AuditHistoryService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil,
              private toastService: ToastrService) { }

  getAllAuditHistory(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/auditHistory', { headers: this.appUtil.getHeader()});
  }
  getAuditHistory(date: string, date1: string): Observable<any> {
    return this.http.get(baseURL + API_URL + '/auditHistory/' + date + '/' + date1 , { headers: this.appUtil.getHeader()});
  }


}
