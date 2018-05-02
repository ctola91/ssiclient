import {Component, OnInit} from '@angular/core';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';

@Component({
  selector: 'ssi-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipments: Equipment[];

  displayedColumns = ['name', 'type', 'description'];

  constructor(private equipmentService: EquipmentService) { }

  ngOnInit() {
    this.equipmentService.getEquipments().subscribe(
      equipments => this.equipments = equipments);
  }
}
