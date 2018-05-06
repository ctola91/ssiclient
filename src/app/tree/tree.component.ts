import {Component, OnInit} from '@angular/core';
import {PositionTree} from '../shared/positionTree';
import {PositionService} from '../services/position.service';
import {Location} from '@angular/common';
import {AreaService} from '../services/area.service';
import {DepartmentService} from '../services/department.service';
import {Area} from '../shared/area';
import {Department} from '../shared/department';

@Component({
  selector: 'ssi-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {

  nodes: PositionTree[];
  nodesAreas: Area[];
  nodesDptos: Department[];

  options = {
    useVirtualScroll: true,
    nodeHeight: 22,
    isExpandedField: 'expanded'
  };

  constructor(private positionService: PositionService,
              private areaService: AreaService,
              private departmentService: DepartmentService,
              private location: Location) {
  }

  ngOnInit() {
    this.positionService.getPositionsTree().subscribe(
      positions => this.nodes = positions);

    this.departmentService.getDepartments().subscribe(
      departments => this.nodesDptos = departments);

    this.areaService.getAreaList().subscribe(
      areas => this.nodesAreas = areas);
  }
}
