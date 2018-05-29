import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../shared/Personal';
import { ActivatedRoute, Router } from '@angular/router';
import {AreaService} from '../../services/area.service';
import {Area} from '../../shared/area';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG, MSG_PERSONAL_CREATED, TITLE_MSG_PERSONAL} from '../../shared/Messages';

@Component({
  selector: 'ssi-create-personal',
  templateUrl: './create-personal.component.html',
  styleUrls: ['./create-personal.component.scss']
})
export class CreatePersonalComponent implements OnInit {

  personalForm: FormGroup;
  personal: Personal;
  listAreas: Area[];
  isUpdate = false;
  id: number;

  constructor(private fb: FormBuilder,
              private personalService: PersonalService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router,
              private toastService: ToastrService) {
    this.createForm();
  }

  ngOnInit() {
    this.areaService.getAreaList().subscribe(this.processAreaData.bind(this), this.processError.bind(this));
    this.verifyEditParam();
  }

  private verifyEditParam(): void {
    this.route.params.subscribe(this.loadEditData.bind(this), this.processError.bind(this));
  }

  private createForm() {
    this.personalForm = this.fb.group({
      name: ['', Validators.required ],
      lastName: ['', Validators.required ],
      email: ['', Validators.required ],
      cellphone: ['', Validators.required ],
      address: ['', Validators.required],
     // birthdate: ['', Validators.required],
      area: ['', Validators.required]
    });
  }

  private processAreaData(listAreas: any) {
    this.listAreas = listAreas;
  }

  private loadEditData(params: any): void {
    if (params.id !== undefined) {
      this.id = params.id;
      this.personalService.getPersonalById(params.id).subscribe(this.processPersonalData.bind(this), this.processError.bind(this));
    }
  }

  private processPersonalData(personal: any): void {

    if( personal != null) {
      this.isUpdate = true;
      this.loadEditPersonal(personal);
    }

  }

  private loadEditPersonal(personal: any): void {
    this.personalForm.patchValue({
      name: personal.name,
      lastName: personal.lastName,
      email: personal.email,
      cellphone: personal.cellphone,
      address: personal.address,
      birthdate: (new Date(personal.birthdate)).toJSON(),
     // area: personal.area.name
    });
  }

  onSubmit() {
    if (!this.isUpdate) {
      console.log(this.personalForm.value);
      this.personalService.savePersonal(this.personalForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.personalService.updatePersonal(this.personalForm.value, this.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }
  }

  private processData(response: any) {
    if (response !== null) {
      this.toastService.info(MSG_PERSONAL_CREATED, TITLE_MSG_PERSONAL);
      this.router.navigate(['personal']);
    }
  }

  private processError(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }
}
