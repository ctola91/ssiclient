import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentService} from '../shared/incident.service';
import {AreaService} from '../../services/area.service';
import {PersonalService} from '../../services/personal.service';

@Component({
  selector: 'ssi-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  incidentForm: FormGroup;
  areas: any[];
  personalList: any[];
  types = [
    'enfermedad', 'accidente', 'incidente'
  ];
  statusList = [
    'reportado', 'pendiente', 'entregado', 'rechazado'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private incidentService: IncidentService,
    private areaService: AreaService,
    private personalService: PersonalService
    ) {
    this.createForm();
}

  ngOnInit() {
    this.areaService.getAreaList()
      .subscribe((res) => {
        this.areas = res.data;
      }, (error) => {
        console.log(error);
      });
    this.personalService.getListPersonals()
      .subscribe((res) => {
        this.personalList = res.data;
      }, (error) => {
        console.log(error);
      });
  }

  createForm() {
    this.incidentForm = this.formBuilder.group({
      code: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      area: ['', Validators.required],
      reportedBy: ['', Validators.required],
      reincident: [''],
      treatment: [''],
      description: ['', Validators.required]
    });
  }

  saveData() {
    console.log(this.incidentForm.value);
    const data = {
      code: this.incidentForm.value.code,
      reportedBy: this.incidentForm.value.reportedBy,
      area: this.incidentForm.value.area,
      reincident: this.incidentForm.value.reincident,
      treatment: this.incidentForm.value.treatment,
      incidentNumber: 4,
      incidentTypeName: this.incidentForm.value.type,
      description: this.incidentForm.value.description,
      incidentSubType: '',
      status: this.incidentForm.value.status
    };
    console.log('saved');
    this.incidentService.createNewIncident(data)
      .subscribe((incident: any) => {
        console.log(incident);
      }, (error) => {
        console.log(error);
      });
    this.incidentForm.reset();
  }

  cancelForm() {
    console.log('cancel');
    this.incidentForm.reset();
  }
}
