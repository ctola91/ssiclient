import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Kardex} from '../../shared/Kardex';
import {ActivatedRoute, Router} from '@angular/router';
import {KardexService} from '../../services/kardex.service';
import {EquipmentService} from '../../services/equipment.service';
import {Equipment} from '../../shared/Equipment';

@Component({
  selector: 'ssi-crate-kardex',
  templateUrl: './crate-kardex.component.html',
  styleUrls: ['./crate-kardex.component.scss']
})
export class CrateKardexComponent implements OnInit {
  kardexForm: FormGroup;
  kardex: Kardex;
  equipments: Equipment[];
  constructor(private fb: FormBuilder,
              private kardexService: KardexService,
              private equipmentService: EquipmentService,
              private route: ActivatedRoute,
              private router: Router) {
              this.createForm();
  }

  ngOnInit() {
    this.equipmentService.getListEquipaments().subscribe(this.processEquipmentData.bind(this), this.processError.bind(this));
  }
  private createForm() {
      this.kardexForm = this.fb.group({
      idEquipament: ['', Validators.required],
      dateKardex: [''],
      entryKardex: ['', Validators.required ],
      outlayKardex: ['', Validators.required ],
      balanceKardex: ['', Validators.required],
    });
  }
  onSubmit() {
    this.kardexService.saveKardex(this.kardexForm.value).subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['kardex']);
  }
  private processError(err) {
    console.log(err);
  }
  private processEquipmentData(equips: any) {
    this.equipments = equips;
  }
}
