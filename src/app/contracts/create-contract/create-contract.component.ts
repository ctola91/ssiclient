import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../shared/Personal';
import { ActivatedRoute, Router } from '@angular/router';
import {ContractService} from '../../services/contract.service';

@Component({
  selector: 'ssi-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.scss']
})
export class CreateContractComponent implements OnInit {

  contractForm: FormGroup;
  personal: Personal;

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.contractForm = this.fb.group({
      code: ['', Validators.required ],
      city: ['', Validators.required ],
      date: ['', Validators.required ],
      description: ['', Validators.required ],
      salary: ['', Validators.required],
      type: ['', Validators.required]
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
