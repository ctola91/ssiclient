import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Position} from '../../shared/position';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ssi-deparment-create',
  templateUrl: './deparment-create.component.html',
  styleUrls: ['./deparment-create.component.scss']
})
export class DeparmentCreateComponent implements OnInit {

  departmentForm: FormGroup;
  department: Department;
  idDepartment: number;

  constructor(private departmentService: DepartmentService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.departmentService.saveDepartment(this.departmentForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['departments']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
