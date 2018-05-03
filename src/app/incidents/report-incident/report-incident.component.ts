import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../shared/incident.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-report-incident',
  templateUrl: './report-incident.component.html',
  styleUrls: ['./report-incident.component.scss']
})
export class ReportIncidentComponent implements OnInit {
  view: number[] = [700, 300];
  data: any[];

  constructor(
    private incidentService: IncidentService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.incidentService.getIncidentList()
      .subscribe((res) => {
        this.data = this.formatData(res.data);
      }, (err) => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  formatData(data: any[]): any[] {
    console.log(data);
    let countAccidents = 0;
    let countIncidents = 0;
    let countDisease = 0;
    data.forEach((el) => {
      if (el.incidentType.incidentTypeName.indexOf('accidente') > -1) {
        countAccidents++;
      }
      if (el.incidentType.incidentTypeName.indexOf('incidente') > -1) {
        countIncidents++;
      }
      if (el.incidentType.incidentTypeName.indexOf('enfermedad') > -1) {
        countDisease++;
      }
    });
    return [
      {
        'name': 'Accidente',
        'value': countAccidents
      },
      {
        'name': 'Enfermedad',
        'value': countDisease
      },
      {
        'name': 'Incidentes Otros',
        'value': countIncidents
      }
    ];
  }
}
