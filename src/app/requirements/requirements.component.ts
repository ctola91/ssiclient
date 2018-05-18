import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {Router} from '@angular/router';
import {RequirementsData} from '../shared/RequirementsData';
import {Requirements} from '../shared/Requirements';
import {RequirementsService} from '../services/requirements.service';
import {RequirementsDataParameters} from '../shared/RequirementsDataParameters';


@Component({
  selector: 'ssi-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {
  displayedColumns = ['Nombre', 'Descripcion','Posicion', 'Accion'];
  dataSource: MatTableDataSource<RequirementsData>;
  requirementss: RequirementsData[] = [];
  requirements: Requirements;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private requirementsService: RequirementsService, private router: Router, private requirementsDataParameters: RequirementsDataParameters) {

    this.loadDataTable();
  }

  ngOnInit() {
  }

  public loadDataTable(): void {
    this.requirementsService.getListRequirements()
      .subscribe(this.processRequirementsData.bind(this),
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

  private processRequirementsData(personal: any) {
    if ( personal.status === 'ok') {
      this.requirementss = personal.data;
      this.dataSource = new MatTableDataSource(this.requirementss);
      this.initDatatable();
    }
  }

  private processErrorData(err) {
    console.log(err);
  }

  deleteRequirement(personal: Requirements): void {

    this.requirementsService.deleteRequirement(personal)
        .subscribe(this.loadDataTable.bind(this), this.processErrorData.bind(this));
  }
  editRequirement(contract: Requirements): void {
    this.requirementsDataParameters.requirementsUpdate = contract;
    this.router.navigate(['requirements/update']);
  }
}
