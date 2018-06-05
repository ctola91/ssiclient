import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {UtilityService} from '../services/utility.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ssi-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
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

  elements: any = [
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'testuser',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'testuser',
    },
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'customer',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'customer',
    },
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'vendor',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'vendor',
    },
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'admin',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'admin',
    },
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'admin',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'admin',
    },
    {
      AuditHistoryId: 1,
      TableName: 'User',
      ColumnName: 'Username',
      ID: 'admin',
      Date: '05-01-2018',
      OldValue: 'test',
      NewValue: 'Test2',
      ModifiedDate: '06-01-2018',
      ModifiedBy: 'admin',
    }
  ];
  dataSource = new MatTableDataSource(this.elements);

  displayedColumns = [
    'AuditHistoryId',
    'TableName',
    'ColumnName',
    'ID',
    'Date',
    'OldValue',
    'NewValue',
    'ModifiedDate',
    'ModifiedBy',
    'Action'
  ];
  statusOpened: boolean;

  constructor(
    private utilityService: UtilityService,
    public dialog: MatDialog
  ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.applyFilter('');
    this.paginator.pageSize = 5;
    this.dataSource.paginator = this.paginator;
    this.utilityService.currentState.subscribe(status => this.statusOpened = status);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AuditDialogComponent, {
      width: '80%',
      data: {
        id: this.selectedElement,
        elements: this.elements
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
