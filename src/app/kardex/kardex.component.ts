import { Component, OnInit } from '@angular/core';
import {KardexService} from '../services/kardex.service';
import {Kardex} from '../shared/Kardex';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ssi-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  kardexs: Kardex [];
  kardexSelect: Kardex;
  kardexsTable: MatTableDataSource<Kardex>;
  displayedColumns = ['code', 'date', 'voucher', 'department', 'entry', 'outlay', 'balance'];
  constructor(private kardexService: KardexService) { }

  ngOnInit() {
    /*this.kardexSercive.getListKardex().subscribe(value => this.kardexs1 = value);*/
    this.kardexService.getListKardex().subscribe(value => this.kardexs = value);

  }
  onSelect(kardex: Kardex) {
    this.kardexSelect = kardex;
  }
}
