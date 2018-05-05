import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'ssi-deparment-detail',
  templateUrl: './deparment-detail.component.html',
  styleUrls: ['./deparment-detail.component.scss']
})
export class DeparmentDetailComponent implements OnInit {
  @Input()
  departmentDetail: Department;

  constructor(private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
  }
}
