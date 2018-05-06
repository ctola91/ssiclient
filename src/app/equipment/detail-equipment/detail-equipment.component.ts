import {Component, Input, OnInit} from '@angular/core';
import {Equipment} from '../../shared/Equipment';
import {EquipmentService} from '../../services/equipment.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ssi-detail-equipment',
  templateUrl: './detail-equipment.component.html',
  styleUrls: ['./detail-equipment.component.scss']
})
export class DetailEquipmentComponent implements OnInit {
  id_Equipment: number;
  equipmentDetail: Equipment;
  image: '../../assets/images/david.png';


  constructor(private equipmentService: EquipmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id_Equipment = this.route.snapshot.params['id'];
    this.route.params
      .switchMap((params: Params) => this.equipmentService.getEquipmentById(+params['id']))
      .subscribe(equip => {
        this.equipmentDetail = equip;
      });
  }
  getType(): string {
    if (this.equipmentDetail.type === 2) {
      return 'Equipo';
    } else {
      return 'Implemento';
    }
  }
}
