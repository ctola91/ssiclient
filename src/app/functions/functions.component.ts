import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {Router} from '@angular/router';
import {RequirementsService} from '../services/requirements.service';
import {RequirementsDataParameters} from '../shared/RequirementsDataParameters';
import {FunctionsData} from '../shared/FunctionsData';
import {Functions} from '../shared/Functions';
import {FunctionsService} from '../services/functions.service';
import {FunctionsDataParameters} from '../shared/FunctionsDataParameters';

@Component({
  selector: 'ssi-function',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  displayedColumns = ['Nombre', 'Descripcion', 'Cargo', 'Accion'];
  dataSource: MatTableDataSource<FunctionsData>;
  functionss: FunctionsData[] = [];
  functions: Functions;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private functionsService: FunctionsService, private router: Router, private functionsDataParameters: FunctionsDataParameters) {

    this.loadDataTable();
  }

  ngOnInit() {
  }

  private loadDataTable(): void {
    this.functionsService.getAllFunctionPositions()
      .subscribe(this.processFunctionsData.bind(this),
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

  private processFunctionsData(personal: any) {
    if ( personal.status === 'ok') {
      this.functionss = personal.data;
      this.dataSource = new MatTableDataSource(this.functionss);
      this.initDatatable();
    }
  }

  private processErrorData(err) {
    console.log(err);
  }

  // deletePersonal(personal: Personal): void {
  //
  //   this.contractService.deletePersonal(personal)
  //       .subscribe(this.loadDataTable.bind(this), this.processErrorData.bind(this));
  // }
  // editContract(contract: Contract): void {
  //
  //   // this.contractService.deletePersonal(personal)
  //   //     .subscribe(this.loadDataTable.bind(this), this.processErrorData.bind(this));
  //
  //   this.contractDataParameters.contractUpdate = contract;
  //
  //   this.router.navigate(['contracts/update']);
  // }
}
