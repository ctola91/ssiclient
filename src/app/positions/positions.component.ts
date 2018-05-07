import {Component, OnInit, ViewChild} from '@angular/core';
import {Position} from '../shared/position';
import {PositionService} from '../services/position.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PositionData} from '../shared/PositionData';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG} from '../shared/Messages';

@Component({
  selector: 'ssi-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  displayedColumns = ['name', 'level', 'nameParentPosition', 'actions'];
  dataSource: MatTableDataSource<PositionData>;
  positions: PositionData[] = [];
  selectedPosition: PositionData;
  deletePosition: PositionData;

  haveChildren = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private positionService: PositionService,
              private toastService: ToastrService) {
    this.loadDataTable();
  }

  ngOnInit() {
  }

  onDelete(position: Position) {
    this.selectedPosition = null;
    this.deletePosition = position;

    this.positionService.getIfHaveChildren(position.id).subscribe(
      result => this.haveChildren = result);
  }

  public doSomething(status: string): void {
    console.log('Status: ', status);
    this.loadData();
    this.deletePosition = null;
  }

  private loadDataTable(): void {
    this.positionService.getPositions()
      .subscribe(this.processData.bind(this),
        this.processErrorData.bind(this));
  }

  loadData() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  private processData(positions: any) {
    this.positions = positions;
    this.dataSource = new MatTableDataSource(this.positions);
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
