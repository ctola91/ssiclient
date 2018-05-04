import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../shared/Equipment';
import {MatTableDataSource} from '@angular/material';
import {Kardex} from '../../shared/Kardex';
import {KardexService} from '../../services/kardex.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'ssi-kardex-equipment',
  templateUrl: './kardex-equipment.component.html',
  styleUrls: ['./kardex-equipment.component.scss']
})
export class KardexEquipmentComponent implements OnInit {
  @Input()
  equipmentKardex: Equipment;
  kardexs: Kardex [];
  kardexsTable: MatTableDataSource<Kardex>;
  displayedColumns = ['date', 'entry', 'outlay', 'balance'];

  constructor(private kardexService: KardexService) {}

  ngOnInit() {
    this.kardexService.getListKardex().subscribe(value => this.kardexs = value);
    this.kardexsTable = new MatTableDataSource(this.kardexs);
    // this.kardexService.getListKardexById(this.equipmentKardex.id).subscribe(value => this.kardexs = value );
  }

}
