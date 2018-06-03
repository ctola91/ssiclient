import {Component, Inject, OnInit} from '@angular/core';
import {UtilityService} from '../services/utility.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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

  ngOnInit() {
    this.utilityService.currentState.subscribe(status => this.statusOpened = status);
  }

  openDialog(): void {
    console.log('opened');
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
