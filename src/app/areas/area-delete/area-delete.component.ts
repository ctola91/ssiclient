import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResponseService} from '../../shared/responseService';
import {Area} from '../../shared/area';
import {AreaService} from '../../services/area.service';

@Component({
  selector: 'ssi-area-delete',
  templateUrl: './area-delete.component.html',
  styleUrls: ['./area-delete.component.scss']
})
export class AreaDeleteComponent implements OnInit {

  @Input()
  areaDelete: Area;

  @Input()
  havePersonal: boolean;

  @Output()
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private areaService: AreaService) {
  }

  ngOnInit() {
  }

  deleteArea(area: Area): void {
    this.areaService.deleteArea(area)
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
