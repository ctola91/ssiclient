import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PersonalService} from '../../services/personal.service';
import {PersonalData} from '../../shared/PersonalData';
import {Personal} from '../../shared/Personal';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG} from '../../shared/Messages';

@Component({
  selector: 'ssi-reporte-personal',
  templateUrl: './reporte-personal.component.html',
  styleUrls: ['./reporte-personal.component.scss']
})
export class ReportePersonalComponent implements OnInit {

  displayedColumns = ['Nombre', 'Apellido', 'Email', 'Direccion', 'Telefono', 'Birthday', 'Estado'];
  dataSource: MatTableDataSource<PersonalData>;
  personals: PersonalData[] = [];
  personal: Personal;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personalService: PersonalService,
              private toastService: ToastrService) {
    this.loadDataTable();
  }

  private loadDataTable(): void {
    this.personalService.getListPersonals()
      .subscribe(this.processPersonalData.bind(this),
        this.processErrorData.bind(this));
  }

  ngOnInit() {

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

  initDatatable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private processErrorData(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }


}

