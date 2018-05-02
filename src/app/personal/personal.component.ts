import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PersonalData } from '../shared/PersonalData';
import { PersonalService } from '../services/personal.service';

@Component({
  selector: 'ssi-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  displayedColumns = ['Nombre', 'Apellido', 'Email', 'Direccion', 'Telefono'];
  dataSource: MatTableDataSource<PersonalData>;
  personals: PersonalData[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  personalForm: FormGroup;

  constructor(private fb: FormBuilder,
              private personalService: PersonalService) {
    this.createForm();


    this.personalService.getListPersonals()
      .subscribe(this.processPersonalData.bind(this), this.processErrorData.bind(this));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.personals);
  }

  ngOnInit() {
  }

  private createForm() {
    this.personalForm = this.fb.group({
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ],
      cellphone: ['', Validators.required ],
      address: ['', Validators.required],
      birthdate: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Send data');
  }

  ngAfterViewInit() {
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
      console.log(this.personals);
    }
  }

  private processErrorData(err) {
    console.log(err);
  }
}
