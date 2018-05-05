import {Component, OnInit, ViewChild} from '@angular/core';
import {Position} from '../shared/position';
import {PositionService} from '../services/position.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'ssi-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {
  positions: MatTableDataSource<Position>;

  selectedPosition: Position;
  deletePosition: Position;
  haveChildren = false;

  displayedColumns = ['name', 'level', 'nameParentPosition', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private positionService: PositionService) {
  }

  ngOnInit() {
    this.loadData();
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

  loadData() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }
}
