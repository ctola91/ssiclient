import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../shared/Personal';
import { ActivatedRoute, Router } from '@angular/router';
import {ContractService} from '../../services/contract.service';
import {Contract} from '../../shared/Contract';
import {ContractDataParameters} from '../../shared/ContractDataParameters';
import { City } from '../models/City';
import { Type } from '../models/Type';
import {ToastrService} from 'ngx-toastr';
import {TITLE_MSG_CONTRACT, MSG_CONTRACT_BODY_UPDATE} from '../../shared/Messages';

@Component({
  selector: 'ssi-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.scss']
})
export class UpdateContractComponent implements OnInit {

  contractForm: FormGroup;
  listCities: City[];
  listTipies: Type[];

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private route: ActivatedRoute,
              private router: Router,
              private contractDataParameters: ContractDataParameters,
              private toastService: ToastrService) {
    this.createForm();
  }

  ngOnInit() {
    this.loadListOfCities();
    this.loadTipies();
  }

  private loadListOfCities(){
    this.listCities = [
      { name : 'COCHABAMBA'},
      { name : 'SANTA CRUZ'},
      { name : 'LA PAZ'},
      { name : 'TARIJA'},
      { name : 'CHUQUISACA'},
      { name : 'POTOSI'},
      { name : 'BENI'},
      { name : 'PANDO'},
      { name : 'ORURO'}
    ];
  }

  private loadTipies() {
    this.listTipies = [
      { name: 'IDEFINIDO' },
      { name: 'SEMESTRAL' },
      { name: 'MENSUAL' },
    ]
  }

  private createForm() {

    console.log(this.contractDataParameters.contractUpdate.date);

    this.contractForm = this.fb.group({
      id: [this.contractDataParameters.contractUpdate.id, Validators.required ],
      code: [this.contractDataParameters.contractUpdate.code, Validators.required ],
      city: [this.contractDataParameters.contractUpdate.city, Validators.required ],
      type: [this.contractDataParameters.contractUpdate.type, Validators.required],
      description: [this.contractDataParameters.contractUpdate.description, Validators.required ],
      salary: [this.contractDataParameters.contractUpdate.salary, Validators.required],
      date: [new Date(this.contractDataParameters.contractUpdate.date).toISOString(), Validators.required ]
    });
  }

  onSubmit() {
    this.contractService.updateContract(this.contractForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if(response !== null){
      this.toastService.info(MSG_CONTRACT_BODY_UPDATE, TITLE_MSG_CONTRACT);
      this.router.navigate(['contracts']);;
    }
  }

  private processError(err) {
    console.log(err);
  }
}
