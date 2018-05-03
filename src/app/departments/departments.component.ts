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
  editDepartment: Department;
  deleteDepartment: Department;
  esCreate = false;
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
    this.esCreate = false;
    this.editDepartment = null;
    this.deleteDepartment = null;
    this.selectedDepartment = department;
  }

  onEdit(department: Department) {
    this.esDelete = false;
    this.esCreate = false;
    this.selectedDepartment = null;
    this.deleteDepartment = null;
    this.editDepartment = department;
  }

  onCreate(department: Department) {
    this.esDelete = false;
    this.esCreate = true;
    this.selectedDepartment = null;
    this.deleteDepartment = null;
    this.editDepartment = null;
  }

  onDelete(department: Department) {
    this.esDelete = true;
    this.esCreate = false;
    this.selectedDepartment = null;
    this.editDepartment = null;
    this.deleteDepartment = department;
  }
}
