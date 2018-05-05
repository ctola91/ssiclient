import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipment} from '../../shared/Equipment';
import {EquipmentService} from '../../services/equipment.service';

@Component({
  selector: 'ssi-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {
  newEquiForm: FormGroup;
  newEquipment: Equipment;

  constructor(private fb: FormBuilder,
              private equipmentService: EquipmentService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.equipmentService.saveEquipament(this.newEquiForm.value).subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['equipments']);
  }
  private processError(err) {
    console.log(err);
  }

  private createForm() {
    this.newEquiForm = this.fb.group({
      name: ['', Validators.required ],
      type: ['', Validators.required ],
      description: ['', Validators.required ],
      image: ['', Validators.required ],
    });
  }
}
