import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';

@Component({
  selector: 'ssi-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  statusOpened = false;

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.utilityService.changeState(false);
  }

}
