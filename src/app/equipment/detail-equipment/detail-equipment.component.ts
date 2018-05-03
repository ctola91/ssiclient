import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../shared/Equipment';

@Component({
  selector: 'ssi-detail-equipment',
  templateUrl: './detail-equipment.component.html',
  styleUrls: ['./detail-equipment.component.scss']
})
export class DetailEquipmentComponent implements OnInit {
  @Input()
  equipmentDetail: Equipment;

  constructor() { }

  ngOnInit() {
  }
  getType(): string {
    if (this.equipmentDetail.type === 2) {
      return 'Equipo';
    } else {
      return 'Implemento';
    }
  }
}
