import {Component, EventEmitter, Host, Input, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {Position} from '../../shared/position';
import {Department} from '../../shared/department';
import {DepartmentService} from '../../services/department.service';
import {Trainer} from '../../shared/trainer';
import {ResponseService} from '../../shared/responseService';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentsComponent} from '../departments.component';

@Component({
  selector: 'ssi-deparment-delete',
  templateUrl: './deparment-delete.component.html',
  styleUrls: ['./deparment-delete.component.scss']
})
export class DeparmentDeleteComponent implements OnInit {
  @Input()
  departmentDelete: Department;

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private departmentService: DepartmentService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
  }

  deleteDepartment(department: Department): void {
    this.departmentService.deleteDepartment(department)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    if (response.status) {
      this.delete('deleted');
    }
  }

  private processError(err) {
    console.log(err);
  }

  public delete(status: string): void {
    this.onDelete.emit(status);
  }
}
