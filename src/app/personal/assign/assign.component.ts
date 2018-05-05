import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EquipmentService} from '../../services/equipment.service';
import {PersonalService} from '../../services/personal.service';
import {Equipment} from '../../shared/Equipment';
import {Personal} from '../../shared/Personal';

@Component({
  selector: 'ssi-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  listEquipaments: Equipment[];
  listPersonals: Personal[];

  constructor(private fb: FormBuilder,
              private equipamentService: EquipmentService,
              private personalService: PersonalService) {
    this.createForm();
  }

  ngOnInit() {
    this.getListEquipaments();
    this.getListPersonals();

  }

  private getListPersonals() {
    this.personalService.getListPersonals()
      .subscribe(this.processPersonals.bind(this), this.errorData.bind(this));
  }

  private getListEquipaments(): void {
    this.equipamentService.getListEquipamentsData()
         .subscribe(this.processData.bind(this), this.errorData.bind(this));
  }

  private processPersonals(personals: any): void {
    if ( personals.status === 'ok' ) {
      this.listPersonals = personals.data;
    }
  }

  private processData(equipaments: any) {
    if ( equipaments.length > 0 ) {
      this.listEquipaments = equipaments;
    }

  }

  private errorData(err){
    console.log(err);
  }

  private createForm(): void {
    this.firstFormGroup = this.fb.group({
      personalName: ['', Validators.required ],
     // personalOptions: new FormControl()
    });

    this.secondFormGroup = this.fb.group({
      nameEquipament: ['', Validators.required],
     // equipamentOptions: new FormControl()
    });
  }

  firstStep() {
    console.log(this.firstFormGroup.value);
  }

  secondStep() {
    console.log(this.secondFormGroup.value);
  }

}
