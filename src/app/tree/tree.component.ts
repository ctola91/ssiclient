import {Component, OnInit} from '@angular/core';
import {PositionTree} from '../shared/positionTree';
import {PositionService} from '../services/position.service';
import {Location} from '@angular/common';

@Component({
  selector: 'ssi-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  nodes: PositionTree[];

  options = {
    useVirtualScroll: true,
    nodeHeight: 22,
    isExpandedField: 'expanded'
  };

  constructor(private positionService: PositionService,
              private location: Location) {
  }

  ngOnInit() {
    this.positionService.getPositionsTree().subscribe(
      positions => this.nodes = positions);
  }
}
