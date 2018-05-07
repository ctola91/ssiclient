import {Component, OnInit, ViewChild} from '@angular/core';
import {PersonalData} from '../../shared/PersonalData';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Personal} from '../../shared/Personal';
import {PersonalService} from '../../services/personal.service';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG} from '../../shared/Messages';

@Component({
  selector: 'ssi-reporte-personal-area',
  templateUrl: './reporte-personal-area.component.html',
  styleUrls: ['./reporte-personal-area.component.scss']
})
export class ReportePersonalAreaComponent implements OnInit {
  displayedColumns = ['Nombre', 'Apellido', 'Email', 'Direccion', 'Telefono', 'Area', 'Estado'];
  dataSource: MatTableDataSource<PersonalData>;
  personals: any;
  personal: Personal;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private personalService: PersonalService,
              private toastService: ToastrService) {
    this.loadDataTable();
  }

  private loadDataTable(): void {
    this.personalService.getListAllPersonal()
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
    if ( personal !== null) {
      this.personals = personal;
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
