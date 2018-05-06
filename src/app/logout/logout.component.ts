import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ssi-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    localStorage.setItem('token', null);
    localStorage.removeItem('token');
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
