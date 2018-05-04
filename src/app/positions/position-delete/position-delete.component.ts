import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {PositionService} from '../../services/position.service';
import {Position} from '../../shared/position';
import {Location} from '@angular/common';
import {ResponseService} from '../../shared/responseService';

@Component({
  selector: 'ssi-position-delete',
  templateUrl: './position-delete.component.html',
  styleUrls: ['./position-delete.component.scss']
})
export class PositionDeleteComponent implements OnInit {

  @Input()
  positionDelete: Position;

  @Input()
  haveChildren: boolean;

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private positionService: PositionService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
  }

  deletePosition(position: Position): void {
    this.positionService.deletePosition(position)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    console.log(response.status);
    if (response.status === 'deleted') {
      this.delete('deleted');
    }
  }

  private processError(err) {
    console.log(err);
  }

  public delete(status: string): void {
    this.onDelete.emit(status);
  }
}
