import {Component, OnInit} from '@angular/core';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';
import {MatTableDataSource} from '@angular/material';
import {Department} from '../shared/department';

@Component({
  selector: 'ssi-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment;
  equipments: Equipment[];
  equipmentsTable: MatTableDataSource<Equipment>;

  selectedEqui: Equipment;
  kardexEqui: Equipment;

  displayedColumns = ['name', 'actions'];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {

    this.equipmentService.getListEquipaments().subscribe(value => this.equipments = value);
    this.equipmentsTable = new MatTableDataSource(this.equipments);

  }

  onSelect(equipment: Equipment) {
    this.kardexEqui = null;
    this.selectedEqui = equipment;
  }

  onKardex(equipment: Equipment) {
    this.selectedEqui = null;
    this.kardexEqui = equipment;
  }

  /*initDatatable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }*/
}
