import {Component, Input, OnInit} from '@angular/core';
import {Position} from '../../shared/position';
import {PositionService} from '../../services/position.service';
import {API_URL, baseURL} from '../../shared/baseurl';
import {HttpHeaders} from '@angular/common/http';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'ssi-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.scss']
})
export class PositionDetailComponent implements OnInit {

  positionDetail: Position;

  constructor(private positionService: PositionService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.positionService.getPositionById(+params['id']))
      .subscribe(position => {
        console.log('pos: ', position);
        this.positionDetail = position;
      });
  }

}
