import { Component, OnInit } from '@angular/core';
import { IncidentService } from './shared/incident.service';

@Component({
  selector: 'ssi-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents: any = [];
  displayedColumns = ['incidentId', 'code', 'area', 'incidentDetailName', 'incidentDetailStatus', 'incidentTypeName'];

  constructor(
    private incidentService: IncidentService
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
      });
  }

}
