import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {IncidentService} from '../incidents/shared/incident.service';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';

import {DomSanitizer} from '@angular/platform-browser';

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

  constructor(private incidentService: IncidentService,
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
    // this.incidentService.getIncidentList()
    //   .subscribe((res) => {
    //     this.data = this.formatData(res.data);
    //   }, (err) => {
    //     console.log(err);
    //     this.toastr.error(err, 'Ha ocurrido un error inesperado');
    //   });

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

    if (data.length > 0) {
      result = [data.length];
      data.forEach((el) => {
        result.fill({
          'name': el.incidentType.incidentDescription,
          'value': el.incidentType.incidentAmount
        });
      });
    } else {
      result = [3];
      result.fill({
        'name': 'Accidente',
        'value': 0
      });
      result.fill({
        'name': 'Enfermendad',
        'value': 0
      });
      result.fill({
        'name': 'Incidentes Otros',
        'value': 0
      });
    }
    console.log('formatedIncidents', result);

    return result;
    // let countAccidents = 0;
    // let countIncidents = 0;
    // let countDisease = 0;
    //
    // data.forEach((el) => {
    //   if (el.incidentType.incidentTypeName.indexOf('accidente') > -1) {
    //     countAccidents++;
    //   }
    //   if (el.incidentType.incidentTypeName.indexOf('incidente') > -1) {
    //     countIncidents++;
    //   }
    //   if (el.incidentType.incidentTypeName.indexOf('enfermedad') > -1) {
    //     countDisease++;
    //   }
    // });
    // return [
    //   {
    //     'name': 'Accidente',
    //     'value': countAccidents
    //   },
    //   {
    //     'name': 'Enfermedad',
    //     'value': countDisease
    //   },
    //   {
    //     'name': 'Incidentes Otros',
    //     'value': countIncidents
    //   }
    // ];
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
