import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PersonalService} from '../services/personal.service';
import {AreaService} from '../services/area.service';
import {Area} from '../shared/area';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AreaDetailComponent} from './area-detail/area-detail.component';

@Component({
  selector: 'ssi-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  areas: MatTableDataSource<Area>;
  selectedArea: Area;
  deleteArea: Area;
  havePersonal = false;

  displayedColumns = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private areaService: AreaService,
              private personalService: PersonalService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loadData();
  }

  onSelected(area: Area) {
    this.selectedArea = area;
    this.deleteArea = null;
  }

  onDelete(area: Area) {
    this.selectedArea = null;
    this.deleteArea = area;

    this.personalService.getIfHavePersonalByArea(area.id).subscribe(
      result => this.havePersonal = result);
  }

  public doSomething(status: string): void {
    console.log('Status: ', status);
    this.loadData();
    this.deleteArea = null;
  }

  loadData() {
    this.areaService.getAreaList().subscribe(
      areas => this.areas = areas);
  }
}
