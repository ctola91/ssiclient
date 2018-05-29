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
export class ContractService {

  constructor(private http: HttpClient,
              private appUtil: AppUtil,
              private toastService: ToastrService) { }

  getListContracts(): Observable<any> {
    return this.http.get(baseURL + API_URL + '/contract', { headers: this.appUtil.getHeader()});
  }

  saveContract(data: any): Observable<any> {
    const params = JSON.stringify(data);
    return this.http.post(baseURL + API_URL + '/contract', params, { headers: this.appUtil.getHeader()} );
  }
  deleteContract(contract: Contract): Observable<any> {
    this.toastService.info(MSG_CONTRACT_BODY_DELETE, TITLE_MSG_CONTRACT);
    const params = JSON.stringify(contract);
    return this.http.delete(baseURL + API_URL + '/contract/' + contract.id, { headers: this.appUtil.getHeader()});
  }

  updateContract(contract: Contract){
    const params = JSON.stringify(contract);
    return this.http.put(baseURL + API_URL + '/contract/update/' + contract.id, params, { headers: this.appUtil.getHeader()});
  }
}
