import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../shared/Personal';
import { ActivatedRoute, Router } from '@angular/router';
import {ContractService} from '../../services/contract.service';
import {Contract} from '../../shared/Contract';
import {ContractDataParameters} from '../../shared/ContractDataParameters';

@Component({
  selector: 'ssi-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.scss']
})
export class UpdateContractComponent implements OnInit {

  contractForm: FormGroup;

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private route: ActivatedRoute,
              private router: Router,
              private contractDataParameters: ContractDataParameters) {
    this.createForm();
  }

  ngOnInit() {
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
    this.contractService.saveContract(this.contractForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    // if(response !== null){
    //   this.router.navigate(['home']);
    //
    // }
    this.router.navigate(['contracts']);

  }

  private processError(err) {
    console.log(err);
  }
}
