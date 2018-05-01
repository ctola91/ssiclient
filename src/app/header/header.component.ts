import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ssi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  test: string;

  constructor() {
  }

  ngOnInit() {
    this.test = localStorage.getItem('token');
    if (localStorage.getItem('token') != null) {
      this.showMenu = true;
    } else {
      this.showMenu = false;
    }
  }

}
