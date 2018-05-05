import { Component, OnInit } from '@angular/core';
import {KardexService} from '../services/kardex.service';
import {Kardex} from '../shared/Kardex';
import {Inventory} from '../shared/Inventory';

@Component({
  selector: 'ssi-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  kardexs: Kardex [];
  kardexSelect: Kardex;
  displayedColumns: ['date', 'entry', 'outlay', 'balance', 'action'];
  constructor(private kardexSercive: KardexService) { }

  ngOnInit() {
    this.kardexSercive.getListKardex().subscribe(value => this.kardexs = value);
  }
  onSelect(kardex: Kardex) {
    this.kardexSelect = kardex;
  }
}
