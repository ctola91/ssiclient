import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Position} from '../../shared/position';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'ssi-deparment-edit',
  templateUrl: './deparment-edit.component.html',
  styleUrls: ['./deparment-edit.component.scss']
})
export class DeparmentEditComponent implements OnInit {

  @Input()
  departmentEdit: Department;

  constructor(private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
  }

}
