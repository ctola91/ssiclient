import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;

  @Input()
  menuActive: string;

  constructor() {
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }
}
