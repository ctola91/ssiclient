import {Component, Input, OnInit, Output} from '@angular/core';
import {Equipment} from '../../shared/Equipment';
import {MatTableDataSource} from '@angular/material';
import {Kardex} from '../../shared/Kardex';
import {KardexService} from '../../services/kardex.service';

@Component({
  selector: 'ssi-kardex-equipment',
  templateUrl: './kardex-equipment.component.html',
  styleUrls: ['./kardex-equipment.component.scss']
})
export class KardexEquipmentComponent implements OnInit {

  @Input()
  equipmentKardex: Equipment;
  public nuevo: Kardex [] = new Array();
  private numero = 0;

  kardexs: Kardex [];
  kardexsTable: MatTableDataSource<Kardex>;
  displayedColumns = ['date', 'entry', 'outlay', 'balance'];

  constructor(private kardexService: KardexService) {}

  ngOnInit() {
    this.kardexService.getListKardex().subscribe(value => this.kardexs = value);
    // this.kardexsTable = new MatTableDataSource(this.kardexs);
    // this.kardexService.getListKardexById(this.equipmentKardex.id).subscribe(value => this.kardexs = value );
  }

  changeMatriz(kardexViejo: Kardex [], id: number): Kardex [] {
    this.nuevo = kardexViejo;
    this.numero = id;
    console.log('id de equipment' + id);
    for (let i = 0; i <= kardexViejo.length; i++) {
      if (this.nuevo[i].idEquipament !== id) {
        kardexViejo.splice(i, 1);
        console.log('iteracion ' + i);
        console.log(kardexViejo.toString());
        console.log(kardexViejo.length);
      }
    }
     return kardexViejo;
  }

}
