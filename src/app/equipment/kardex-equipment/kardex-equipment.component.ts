import {Component, Input, OnInit, Output} from '@angular/core';
import {Equipment} from '../../shared/Equipment';
import {MatTableDataSource} from '@angular/material';
import {Kardex} from '../../shared/Kardex';
import {KardexService} from '../../services/kardex.service';
import {ActivatedRoute} from '@angular/router';
import {EquipmentService} from '../../services/equipment.service';

@Component({
  selector: 'ssi-kardex-equipment',
  templateUrl: './kardex-equipment.component.html',
  styleUrls: ['./kardex-equipment.component.scss']
})
export class KardexEquipmentComponent implements OnInit {
  id_Equipment: number;
  equi: Equipment;
  public nuevo: Kardex [] = new Array();
  private numero = 0;

  kardexs: Kardex [];
  kardexsTable: MatTableDataSource<Kardex>;
  displayedColumns = ['date', 'voucher', 'department', 'entry', 'outlay', 'balance'];

  constructor(private kardexService: KardexService,
              private equipService: EquipmentService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.id_Equipment = this.route.snapshot.params['id'];
    this.equipService.getEquipmentById(this.id_Equipment).subscribe(value => this.equi = value );
    //this.kardexService.getListKardex().subscribe(value => this.kardexs = value);
    this.kardexsTable = new MatTableDataSource(this.kardexs);
    this.kardexService.getListKardexByIdEquip(this.id_Equipment).subscribe(value => this.kardexs = value );
  }

  private changeMatriz(kardexViejo: Kardex []): Kardex [] {
    this.nuevo = kardexViejo;
    this.numero = this.id_Equipment;
    console.log('id de equipment' + this.numero);
    for (let i = 0; i <= kardexViejo.length; i++) {
      if (this.nuevo[i].idEquipament !== this.numero) {
        kardexViejo.splice(i, 1);
        console.log('iteracion ' + i);
        console.log(kardexViejo.toString());
        console.log(kardexViejo.length);
      }
    }
     return kardexViejo;
  }

  getTypo(): string {
    if (this.equi.type === 1) {
      return 'Implemento';
    } else {
      return 'Equipo';
    }
  }
}
