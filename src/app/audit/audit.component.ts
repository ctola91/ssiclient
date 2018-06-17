import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {UtilityService} from '../services/utility.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatTableDataSource, MatDatepickerInputEvent} from '@angular/material';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuditService } from './shared/audit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ssi-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  auditForm: FormGroup;
  events: string[] = [];

  selectedElement: any = {
    AuditHistoryId: 1,
    TableName: 'User',
    ColumnName: 'Username',
    ID: 'admin',
    Date: '05-01-2018',
    OldValue: 'test',
    NewValue: 'Test2',
    ModifiedDate: '06-01-2018',
    ModifiedBy: 'admin',
  };

  elements: any = [];
  dataSource: MatTableDataSource<any>;

  displayedColumns = [
    'audit_id',
    'tableName',
    'columnName',
    'ids',
    'date',
    'oldvalue',
    'newvalue',
    'modifiedDate',
    'modifiedBy'
  ];
  statusOpened: boolean;

  constructor(
    private auditService: AuditService,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    public dialog: MatDialog,
    public toastr: ToastrService
  ) {
    this.createForm();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.utilityService.currentState.subscribe(status => this.statusOpened = status);
    this.auditService.getAllAuditItems()
      .subscribe(result => {
        this.elements = result;
        this.dataSource = new MatTableDataSource(this.elements);
        console.log(this.dataSource);
        this.paginator.pageSize = 5;
        this.dataSource.paginator = this.paginator;
        this.utilityService.currentState.subscribe(status => this.statusOpened = status);
      }, err => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });

    // this.applyFilter('');

  }

  createForm() {
    this.auditForm = this.formBuilder.group({
      startDate: [''],
      endDate: ['']
    });
  }

  applyFilterDate() {
    console.log(this.auditForm.value);

    this.auditService.getAuditItems(this.auditForm.value.startDate.toLocaleDateString(), this.auditForm.value.endDate.toLocaleDateString())
      .subscribe(result => {
        this.elements = result;
        this.dataSource = new MatTableDataSource(this.elements);
        this.paginator.pageSize = 5;
        this.dataSource.paginator = this.paginator;
        this.utilityService.currentState.subscribe(status => this.statusOpened = status);
      }, err => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

@Component({
  selector: 'ssi-audit-dialog',
  templateUrl: 'audit-dialog.html',
})
export class AuditDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AuditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
