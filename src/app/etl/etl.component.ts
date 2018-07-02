import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {IncidentsEtlService} from '../services/incidents-etl.service';

@Component({
  selector: 'ssi-etl',
  templateUrl: './etl.component.html',
  styleUrls: ['./etl.component.scss']
})
export class EtlComponent implements OnInit {

  reports = [
    {value: '0', viewValue: 'Reporte Detalle Incidentes'},
    {value: '1', viewValue: 'Reporte Incidentes por Area'}
  ];
  isChart = false;
  isTable = false;
  reportFilterForm: FormGroup;

  incidentesEtl: any[];
  incidentsArea: any[];

  viewType: number[] = [700, 300];
  dataType: any[];
  resultType: any[];

  displayedColumns = [
    'date',
    'name',
    'status',
    'age',
    'type',
    'area',
    'detail',
    'severity',
    'reportedBy',
    'position'
  ];

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private incidentsEtlService: IncidentsEtlService) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.reportFilterForm = this.fb.group({
      typeReport: ['', Validators.required],
      pickerStart: ['', Validators.required],
      pickerEnd: ['', Validators.required]
    });
  }

  private onSubmit() {
    console.log('hola mundo');
    console.log(this.reportFilterForm.value.pickerStart.toLocaleString());
    console.log(this.reportFilterForm.value.pickerEnd.toLocaleString());
    if (this.reportFilterForm.value.typeReport === '0') {
      this.isTable = true;
      this.isChart = false;

      this.incidentsEtlService.getDetailIncidentsByDate( this.reportFilterForm.value.pickerStart.toLocaleDateString(),
        this.reportFilterForm.value.pickerEnd.toLocaleDateString())
        .subscribe(res => this.incidentesEtl =  res.data);

    } else {
      if (this.reportFilterForm.value.typeReport === '1') {
        this.isChart = true;
        this.isTable = false;

        this.incidentsEtlService.getIncidentsByArea( this.reportFilterForm.value.pickerStart.toLocaleDateString(),
          this.reportFilterForm.value.pickerEnd.toLocaleDateString())
          .subscribe(res => this.incidentsArea = res.data); //this.formatData(res.data, this.resultType));
        console.log(this.incidentsArea);
      } else {
        this.isTable = false;
        this.isChart = false;
      }
    }
  }

  formatData(data: any[], result: any[]): any[] {
    console.log(data);
    result = [];

    if (data.length > 0) {
      data.forEach((el) => {
        result.push({
          'name': '' + el.areaName,
          'value': el.numIncidents
        });
      });
    } else {
      result.push({
        'name': 'Construccion',
        'value': 0
      });
    }

    return result;
  }
}
