import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Department} from '../shared/department';
import {DepartmentService} from '../services/department.service';

@Component({
  selector: 'ssi-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];

  selectedDepartment: Department;
  deleteDepartment: Department;
  esDelete = false;

  displayedColumns = ['name', 'actions'];

  constructor(private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
    this.departmentService.getDepartments().subscribe(
      departments => this.departments = departments);
  }

  onSelect(department: Department) {
    this.esDelete = false;
    this.deleteDepartment = null;
    this.selectedDepartment = department;
  }

  onDelete(department: Department) {
    this.esDelete = true;
    this.selectedDepartment = null;
    this.deleteDepartment = department;
  }

  public doSomething(status: string): void {
    console.log('Status: ', status);
    this.departmentService.getDepartments().subscribe(
      departments => this.departments = departments);
    this.deleteDepartment = null;
  }
}
