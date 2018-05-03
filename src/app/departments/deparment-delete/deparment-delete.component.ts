import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Position} from '../../shared/position';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'ssi-deparment-delete',
  templateUrl: './deparment-delete.component.html',
  styleUrls: ['./deparment-delete.component.scss']
})
export class DeparmentDeleteComponent implements OnInit {
  @Input()
  departmentDelete: Department;

  constructor(private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
  }

}
