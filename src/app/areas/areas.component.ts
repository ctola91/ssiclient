import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PersonalService} from '../services/personal.service';
import {AreaService} from '../services/area.service';
import {Area} from '../shared/area';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AreaDetailComponent} from './area-detail/area-detail.component';
import {AreaData} from '../shared/AreaData';
import {ERROR_MSG} from '../shared/Messages';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  dataSource: MatTableDataSource<AreaData>;
  areas: Area[] = [];
  selectedArea: AreaData;
  deleteArea: AreaData;
  havePersonal = false;

  displayedColumns = ['name', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private areaService: AreaService,
              private personalService: PersonalService,
              public dialog: MatDialog,
              private toastService: ToastrService) {
    this.loadDataTable();
  }

  ngOnInit() {
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

  private loadDataTable(): void {
    this.areaService.getAreaList()
      .subscribe(this.processData.bind(this),
        this.processErrorData.bind(this));
  }

  loadData() {
    this.areaService.getAreaList().subscribe(
      areas => this.areas = areas);
  }

  private processData(areas: any) {
    this.areas = areas;
    this.dataSource = new MatTableDataSource(this.areas);
    this.initDatatable();
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
