import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Position} from '../../shared/position';
import {PositionData} from '../../shared/PositionData';
import {PositionService} from '../../services/position.service';
import {ToastrService} from 'ngx-toastr';
import {ERROR_MSG} from '../../shared/Messages';

@Component({
  selector: 'ssi-report-positions',
  templateUrl: './report-positions.component.html',
  styleUrls: ['./report-positions.component.scss']
})
export class ReportPositionsComponent implements OnInit {

  displayedColumns = ['Nombre', 'Descripcion', 'Nivel', 'NameParentPosition'];
  dataSource: MatTableDataSource<PositionData>;
  positions: PositionData[] = [];
  position: Position;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private positionService: PositionService,
              private toastService: ToastrService) {
    this.loadDataTable();
  }

  private loadDataTable(): void {
    this.positionService.getPositions()
      .subscribe(this.processData.bind(this),
        this.processErrorData.bind(this));
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
