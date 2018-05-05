import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Equipment} from '../../shared/Equipment';
import {EquipmentService} from '../../services/equipment.service';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ssi-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.scss']
})
export class CreateEquipmentComponent implements OnInit {
  CreForm: FormGroup;
  newEquipment: Equipment;

  constructor(private fb: FormBuilder,
              private equiService: EquipmentService,
              private route: ActivatedRoute,
              private router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.equiService.saveEquipament(this.CreForm).subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['equipment']);
  }
  private processError(err) {
    console.log(err);
  }

  private createForm() {
    this.CreForm = this.fb.group({
      name: ['', Validators.required ],
      area: ['', Validators.required ],
      type: ['', Validators.required ],
      description: ['', Validators.required ],
      image: ['', Validators.required ],
    });
  }
}
