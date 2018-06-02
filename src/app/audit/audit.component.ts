import {Component, Inject, OnInit} from '@angular/core';
import {UtilityService} from '../services/utility.service';

@Component({
  selector: 'ssi-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit {
  elements: any = [
    {
      test: 'hola'
    },
    {
      test: 'hi'
    }
  ];
  displayedColumns = [
    'AuditHistoryId',
    'TableName',
    'ColumnDate',
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
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.utilityService.currentState.subscribe(status => this.statusOpened = status);
  }

  openDialog(): void {
    console.log('opened');
  }

}
