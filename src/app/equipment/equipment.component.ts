import {Component, OnInit} from '@angular/core';
import {Equipment} from '../shared/Equipment';
import {EquipmentService} from '../services/equipment.service';
import {MatTableDataSource} from '@angular/material';
import {MSG_PERSONAL_DELETED, TITLE_MSG_PERSONAL} from '../shared/Messages';
import {ToastrService} from 'ngx-toastr';
import {Inventory} from '../shared/Inventory';
import {Kardex} from '../shared/Kardex';
import {InventoryService} from '../services/inventory.service';
import {KardexService} from '../services/kardex.service';

@Component({
  selector: 'ssi-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: Equipment;
  equipments: Equipment[];
  inventories: Inventory[];
  kardexs: Kardex[];
  equipmentsTable: MatTableDataSource<Equipment>;

  selectedEqui: Equipment;
  kardexEqui: Equipment;

  displayedColumns = ['name', 'actions'];

  constructor(private equipmentService: EquipmentService,
              private inventoryService: InventoryService,
              private kardexService: KardexService,
              private toastService: ToastrService) { }

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
  deleteEquipment(equi: Equipment) {
    if (this.checkDependences(equi.id)) {
      this.equipmentService.deleteEquipment(equi).subscribe(this.loadEquipaments.bind(this));
    } else {
      this.toastService.info(MSG_PERSONAL_DELETED, TITLE_MSG_PERSONAL);
    }
  }
  private checkDependences(id: number): boolean {
    this.kardexService.getListKardexByIdEquip(id).subscribe();
    /*if (this.kardexs.length !== 0) {
      return false;
    }*/
    return true;
  }
  private loadEquipaments(): void {
    this.equipmentService.getListEquipaments().subscribe(value => this.equipments = value);
  }


}
