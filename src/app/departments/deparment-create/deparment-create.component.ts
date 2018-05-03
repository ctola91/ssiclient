import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Position} from '../../shared/position';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'ssi-deparment-create',
  templateUrl: './deparment-create.component.html',
  styleUrls: ['./deparment-create.component.scss']
})
export class DeparmentCreateComponent implements OnInit {
  esCreate = true;

  constructor(private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
  }

}
