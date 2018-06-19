import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsersData } from '../shared/UsersData';
import { UserService } from '../services/user.service';
import { User } from '../shared/User';
import { ToastrService } from 'ngx-toastr';
import { ERROR_MSG, MSG_PERSONAL_DELETED, TITLE_MSG_PERSONAL, MSG_USER_BODY_DELETE, TITLE_MSG_USER } from '../shared/Messages';

@Component({
  selector: 'ssi-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['UserName', 'Password', 'Active', 'Accion'];
  dataSource: MatTableDataSource<UsersData>;
  users: UsersData[] = [];
  user: User;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
              private toastService: ToastrService) {

    this.loadDataTable();
  }

  ngOnInit() {
  }

  private loadDataTable(): void {
    this.userService.getListUsers()
      .subscribe(this.processUserData.bind(this),
        this.processErrorData.bind(this));
  }

  initDatatable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  private processUserData(user: any) {
    this.users = user;
    this.dataSource = new MatTableDataSource(this.users);
    this.initDatatable();  
  }

  private processErrorData(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }

  deleteUser(user: User): void {
    this.toastService.info(MSG_USER_BODY_DELETE, TITLE_MSG_USER);
    this.userService.deleteUser(user)
        .subscribe(this.loadDataTable.bind(this), this.processErrorData.bind(this));
  }
}
