import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Inventory} from '../../shared/Inventory';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonalService} from '../../services/personal.service';
import {InventoryService} from '../../services/inventory.service';

@Component({
  selector: 'ssi-create-inventory',
  templateUrl: './create-inventory.component.html',
  styleUrls: ['./create-inventory.component.scss']
})
export class CreateInventoryComponent implements OnInit {
  inventoryForm: FormGroup;
  inventory: Inventory;

  constructor(private fb: FormBuilder,
              private inventoryService: InventoryService,
              private route: ActivatedRoute,
              private router: Router) {
              this.createForm();
  }

  ngOnInit() {
  }
  private createForm() {
    this.inventoryForm = this.fb.group({
      equipment: ['', Validators.required ],
      personal: ['', Validators.required ],
      dateAsigment: ['', Validators.required ],
      status: ['', Validators.required],
      active: ['', Validators.required]
    });
  }
  onSubmit() {
    this.inventoryService.saveInventory(this.inventoryForm).subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    this.router.navigate(['inventory']);
  }
  private processError(err) {
    console.log(err);
  }
}
