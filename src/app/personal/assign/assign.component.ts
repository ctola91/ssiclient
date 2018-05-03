import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ssi-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.firstFormGroup = this.fb.group({
      personalName: ['', Validators.required ]
    });

    this.secondFormGroup = this.fb.group({
      nameEquipament: ['', Validators.required]
    });
  }

}
