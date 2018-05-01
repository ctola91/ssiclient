import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'ssi-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(employees => this.employees = employees);
  }

}
