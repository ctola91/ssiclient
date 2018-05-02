import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PersonalData } from '../shared/PersonalData';
import { PersonalService } from '../services/personal.service';
import {Personal} from '../shared/Personal';

@Component({
  selector: 'ssi-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  displayedColumns = ['Nombre', 'Apellido', 'Email', 'Direccion', 'Telefono', 'Accion'];
  dataSource: MatTableDataSource<PersonalData>;
  personals: PersonalData[] = [];
  personal: Personal;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personalService: PersonalService) {

    this.loadDataTable();
  }

  ngOnInit() {
  }

  private loadDataTable(): void {
    this.personalService.getListPersonals()
      .subscribe(this.processPersonalData.bind(this),
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

  private processPersonalData(personal: any) {
    if ( personal.status === 'ok') {
      this.personals = personal.data;
      this.dataSource = new MatTableDataSource(this.personals);
      this.initDatatable();
    }
  }

  private processErrorData(err) {
    console.log(err);
  }

  deletePersonal(personal: Personal): void {

    this.personalService.deletePersonal(personal)
        .subscribe(this.loadDataTable.bind(this), this.processErrorData.bind(this));
  }
}
