import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {IncidentService} from '../incidents/shared/incident.service';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';

import {DomSanitizer} from '@angular/platform-browser';
import {IncidentsEtlService} from '../services/incidents-etl.service';

@Component({
  selector: 'ssi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  viewSeverity: number[] = [700, 300];
  dataSeverity: any[];
  viewType: number[] = [700, 300];
  dataType: any[];
  resultSeverity: any[];
  resultType: any[];

  item: Equipment;
  itemIds: number[];
  prev: number;
  next: number;

  constructor(private incidentService: IncidentsEtlService,
              private toastr: ToastrService,
              private equipamentService: EquipmentService
    , private domSanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.loadDataIncidents();
    this.loadDataEquipment();
  }

  private loadDataIncidents() {
    this.incidentService.getIncidentsBySeverity()
      .subscribe((res) => {
        this.dataSeverity = this.formatData(res.data, this.resultSeverity);
      }, (err) => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });

    this.incidentService.getIncidentsByType()
      .subscribe((res) => {
        this.dataType = this.formatData(res.data, this.resultType);
      }, (err) => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  formatData(data: any[], result: any[]): any[] {
    console.log(data);
    result = [];

    if (data.length > 0) {
      data.forEach((el) => {
        result.push({
            'name': '' + el.description,
          'value': el.amount
        });
      });
    } else {
      result.push({
        'name': 'Accidente',
        'value': 0
      });
      result.push({
        'name': 'Enfermendad',
        'value': 0
      });
      result.push({
        'name': 'Incidentes Otros',
        'value': 0
      });
    }

    return result;
  }

  private loadDataEquipment() {
    this.equipamentService.getEquipamentIds()
      .subscribe((itemIds) => {
          this.itemIds = itemIds;

          if (this.itemIds != null && this.itemIds.length > 0) {
            this.loadEquipament(this.itemIds[0]);
          }
        },
        (err) => {
          console.log(err);
          this.toastr.error(err, 'Ha ocurrido un error inesperado');
        });
  }

  loadEquipament(id: number) {
    this.equipamentService.getEquipmentById(id)
      .subscribe(item => {
          this.item = {
            id: item.id,
            name: item.name,
            description: item.description,
            type: item.type,
            image: this.domSanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + item.image)
          };
          //this.item = item;
          this.setPrevNext(item.id);
        },
        (err) => {
          console.log(err);
          this.toastr.error(err, 'Ha ocurrido un error inesperado');
        });
  }

  setPrevNext(itemId: number) {
    const index = this.itemIds.indexOf(itemId);
    this.prev = this.itemIds[(this.itemIds.length + index - 1) % this.itemIds.length];
    this.next = this.itemIds[(this.itemIds.length + index + 1) % this.itemIds.length];
  }
}
