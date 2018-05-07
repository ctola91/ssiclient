import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EquipmentService} from '../../services/equipment.service';
import {PersonalService} from '../../services/personal.service';
import {Equipment} from '../../shared/Equipment';
import {Personal} from '../../shared/Personal';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ERROR_MSG} from '../../shared/Messages';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'ssi-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  displayedColumns = ['seleccionar', 'name', 'description'];
  dataSource = new MatTableDataSource<Equipment>();

  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<Equipment>(this.allowMultiSelect, this.initialSelection);

  formPersonalAssign: FormGroup;

  personals: any;
  // currentPersonal = {id: 0, createdOn: '', updatedOn: 0,
  //                       version: 0, name: '', lastName: '', photo: null,
  //                        email: '', address: '', cellphone: '7556622', telephone: null,
  //                       active: true, birthdate: '', area: {
  //                                       id: 0,
  //                                       createdOn: 0,
  //                                       updatedOn: null,
  //                                       version: 0,
  //                                       name: '',
  //                                       description: ''
  //                                    },
  //                                 activitiesSsos: []};
  currentPersonal = '';

  constructor(private fb: FormBuilder,
              private equipamentService: EquipmentService,
              private personalService: PersonalService,
              private toastService: ToastrService) {
     this.createForm();
  }

  private createForm() {
  }

  ngOnInit() {
    this.loadListEquipament();

  }

  private loadListEquipament(): void {
    this.equipamentService.getListEquipaments().subscribe(
      this.processEquipamentService.bind(this),
      this.processError.bind(this));
  }

  private doFilterPersonal(): void {
    console.log(this.currentPersonal);
    this.personals = this.personalService.getListAllPersonal()
      .pipe(map(personals => this.filter(personals)));
  }

  filter(personals: any) {
    return personals.filter(personal => personal.name.toLowerCase().includes(this.currentPersonal));
  }

  private processPersonalData(personals: any) {
    this.personals = personals;
  }

  filterPersonal(name: string) {
    console.log(name);
    return this.personals.filter(personal =>
      personal.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  private processEquipamentService(equipament: any): void {
    if( equipament !== null) {
      this.dataSource.data = equipament;
    }
  }

  private processError(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }

  private doFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
