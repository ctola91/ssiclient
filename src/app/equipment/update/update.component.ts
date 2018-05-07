import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipment} from '../../shared/Equipment';
import {EquipmentService} from '../../services/equipment.service';

@Component({
  selector: 'ssi-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  equipment: Equipment;
  upEquiForm: FormGroup;
  id_Equipment: number;

  datos = [
    {name: 'Equipo', value: 1},
    {name: 'Implemento', value: 2},
  ];

  constructor(private equipmentService: EquipmentService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.id_Equipment = +params['id'];
        this.getEquipment();
      } else {
        this.router.navigate(['equipments']);
      }
    });
    this.createForm();
  }

  onSubmit() {
    this.equipment = {
      id: this.equipment.id,
      image: this.equipment.image,
      name: this.upEquiForm.value.name,
      description: this.upEquiForm.value.description,
      type: this.upEquiForm.value.type
    };

    this.equipmentService.updateEquipment(this.equipment, this.equipment.id)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private createForm() {
    this.upEquiForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  private getEquipment() {
    this.equipmentService.getEquipmentById(this.id_Equipment).subscribe(equi => {
      this.equipment = equi;
      this.upEquiForm.patchValue({
        name: equi.name,
        type: equi.type,
        description: equi.description
      });
    });
  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['equipments']);
    }
  }

  private processError(err) {
    console.log(err);
  }

}
