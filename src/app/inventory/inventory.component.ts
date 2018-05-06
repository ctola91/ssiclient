import { Component, OnInit } from '@angular/core';
import {Inventory} from '../shared/Inventory';
import {InventoryService} from '../services/inventory.service';

@Component({
  selector: 'ssi-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  inventories: Inventory [];
  inventorySelec: Inventory;

  displayedColumns = ['personal', 'equipment', 'status', 'active', 'asisgmentDate'];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.inventoryService.getListInventories().subscribe(value => this.inventories = value);
  }
  onSelect(inventory: Inventory) {
    this.inventorySelec = inventory;
  }

  changeActive(bool: boolean): string {
    if (bool) {
      return 'Activo';
    } else {
      return 'Inactivo';
    }
  }

}
