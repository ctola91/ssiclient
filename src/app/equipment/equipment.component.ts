import {Component, OnInit} from '@angular/core';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ssi-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment;
  equipments: Equipment[];
  equipmentsTable: MatTableDataSource<Equipment>;
  displayedColumns = ['name', 'type', 'description'];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {

    this.equipmentService.getListEquipaments().subscribe(value => this.equipments = value);
    this.equipmentsTable = new MatTableDataSource(this.equipments);

  }

  /*initDatatable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }*/
}
