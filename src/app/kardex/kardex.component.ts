import { Component, OnInit } from '@angular/core';
import {KardexService} from '../services/kardex.service';
import {Kardex} from '../shared/Kardex';
import {MatTableDataSource} from '@angular/material';
import {EquipmentService} from '../services/equipment.service';
import {Equipment} from '../shared/Equipment';

@Component({
  selector: 'ssi-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  aux = '';
  kardexs: Kardex [];
  equips: Equipment [];
  kardexSelect: Kardex;
  kardexsTable: MatTableDataSource<Kardex>;
  displayedColumns = ['code', 'date', 'description', 'balance'];
  constructor(private kardexService: KardexService, private equiService: EquipmentService) { }

  ngOnInit() {
    /*this.kardexSercive.getListKardex().subscribe(value => this.kardexs1 = value);*/
    this.equiService.getListEquipaments().subscribe(value => this.equips = value);
    this.kardexService.getListKardex().subscribe(value => this.kardexs = value);

  }
  getEquip(id: number): any {
    this.equips.forEach(value => {
      if (value.id === id) { this.aux = value.name; }
    });
    return this.aux;
  }
  onSelect(kardex: Kardex) {
    this.kardexSelect = kardex;
  }
}
