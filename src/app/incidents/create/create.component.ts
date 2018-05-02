import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ssi-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  incidentForm: FormGroup;
  types = [
    'type 1', 'type 2', 'type 3'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
}

  ngOnInit() {
  }

  createForm() {
    this.incidentForm = this.formBuilder.group({
      code: ['', Validators.required],
      type: ['', Validators.required],
      reincident: [''],
      treatment: [''],
      description: ['', Validators.required]
    });
  }

  saveData() {
    console.log(this.incidentForm.value);
    console.log('saved');
    this.incidentForm.reset();
  }

  cancelForm() {
    console.log('cancel');
    this.incidentForm.reset();
  }
}
