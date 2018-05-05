import {Component, Inject, Input, OnInit} from '@angular/core';
import {Area} from '../../shared/area';

@Component({
  selector: 'ssi-area-detail',
  templateUrl: './area-detail.component.html',
  styleUrls: ['./area-detail.component.scss'],
})
export class AreaDetailComponent implements OnInit {

  @Input()
  areaDetail: Area;

  constructor() {
  }

  ngOnInit() {
  }

}
