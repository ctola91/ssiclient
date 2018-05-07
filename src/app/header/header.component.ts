import {Component, Input, OnInit} from '@angular/core';
import {UtilityService} from '../services/utility.service';

@Component({
  selector: 'ssi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  openStatus = false;

  @Input()
  menuActive: string;

  constructor(private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.utilityService.currentState.subscribe(status => this.openStatus = status);
    if (localStorage.getItem('token') != null) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
  toogleStatus() {
    this.utilityService.changeState(!this.openStatus);
    console.log(this.openStatus);
  }
}
