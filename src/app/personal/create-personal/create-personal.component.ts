import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../../services/personal.service';
import { Personal } from '../../shared/Personal';
import { ActivatedRoute, Router } from '@angular/router';
import {AreaService} from '../../services/area.service';
import {Area} from '../../shared/area';

@Component({
  selector: 'ssi-create-personal',
  templateUrl: './create-personal.component.html',
  styleUrls: ['./create-personal.component.scss']
})
export class CreatePersonalComponent implements OnInit {

  personalForm: FormGroup;
  personal: Personal;
  listAreas: Area[];

  constructor(private fb: FormBuilder,
              private personalService: PersonalService,
              private areaService: AreaService,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
    this.areaService.getAreaList().subscribe(this.processAreaData.bind(this), this.processError.bind(this));
  }

  private createForm() {
    this.personalForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      cellphone: ['', Validators.required ],
      address: ['', Validators.required],
      birthdate: ['', Validators.required],
      areaPersonal: ['', Validators.required]
    });
  }

  private processAreaData(listAreas: any) {
    this.listAreas = listAreas;
  }

  onSubmit() {
    this.personalService.savePersonal(this.personalForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if(response !== null){
      this.router.navigate(['home']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
