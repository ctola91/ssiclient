import { Component, OnInit } from '@angular/core';
import {AccidentData} from '../shared/AccidentData';
import {MatTableDataSource} from '@angular/material';

import {AccidentService} from '../services/accident.service';
import {Accident} from '../shared/Accident';

@Component({
  selector: 'ssi-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  displayedColumns = ['Id', 'Fecha', 'Descripcion'];
  dataSource: MatTableDataSource<AccidentData>;
  accidents: AccidentData[] = [];
  accident: Accident;
  constructor(private accidentService: AccidentService) {
    this.loadDataTable();
  }

  ngOnInit() {
  }

  private loadDataTable(): void {
    this.accidentService.getListAccidents()
      .subscribe(this.processAccidentData.bind(this),
        this.processErrorData.bind(this));
  }

  private processAccidentData(accident: any) {
    if (accident.status === 'ok') {
      this.accidents = accident.data;
      this.dataSource = new MatTableDataSource(this.accidents);
      console.log(this.accidents);
      console.log(this.dataSource);
    }
  }

  private processErrorData(err) {
    console.log(err);
  }
}
