import {Component, OnInit} from '@angular/core';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ssi-deparment-edit',
  templateUrl: './deparment-edit.component.html',
  styleUrls: ['./deparment-edit.component.scss']
})
export class DeparmentEditComponent implements OnInit {

  departmentForm: FormGroup;
  department: Department;
  idDepartment: number;

  constructor(private departmentService: DepartmentService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.idDepartment = +params['id'];
        this.findDepartment();
      } else {
        this.router.navigate(['departments']);
      }
    });

    this.createForm();
  }

  private findDepartment() {
    this.departmentService.findDepartmentById(this.idDepartment).subscribe(department => {
      this.department = department;
      this.departmentForm.patchValue({
        name: department.name,
        description: department.description
      });
    });
  }

  private createForm() {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.departmentService.updateDepartment(this.departmentForm.value, this.department.id)
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
