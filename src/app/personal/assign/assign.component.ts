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

  constructor(private fb: FormBuilder,
              private equipamentService: EquipmentService,
              private personalService: PersonalService,
              private toastService: ToastrService) {
    // this.createForm();
  }

  ngOnInit() {

    this.equipamentService.getListEquipaments().subscribe(
      this.processEquipamentService.bind(this),
      this.processError.bind(this));

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
    if( equipament !== null){
      this.dataSource.data = equipament;
    }
  }

  private processError(err) {
    console.log(err);
    this.toastService.error(err, ERROR_MSG);
  }

  private doFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
