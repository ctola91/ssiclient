import { Component, OnInit } from '@angular/core';
import { IncidentService } from './shared/incident.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents: any = [];
  displayedColumns = [
    'dateAt',
    'code',
    'area',
    'incidentDetailName',
    'incidentDetailStatus',
    'incidentTypeName',
    'Recurren' +
    '' +
    '' +
    'ce',
    'severity',
      'Accion'];
    current = 76;
  max = 100;

  constructor(
    private incidentService: IncidentService,
    private toastr: ToastrService
  ) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.incidentService.getIncidentList()
      .subscribe(result => {
          this.incidents = result.data;
          console.log(this.incidents);
      }, err => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  deleteIncident(incident: any) {
    this.incidentService.deleteIncident(incident)
      .subscribe(result => {
        this.loadData();
        this.toastr.success('El incidente fue eliminado satisfactoriamente', result.status);
      }, error => {
        console.log(error);
        this.toastr.error(error, 'Ha ocurrido un error inesperado');
      });
  }

  getColor(num: number): string {
    if (num < 30 ) {
      return '#F44336';
    }
    if (num >= 31 && num < 50) {
      return '#FFC107';
    }
    if (num >= 50 && num < 74) {
      return '#4CAF50';
    }
    if (num >= 75 && num <= 100) {
      return '#3F51B5';
    }
  }
}
