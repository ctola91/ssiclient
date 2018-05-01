import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssi-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  incidents = [
    {
      id: 1,
      description: 'Hello World'
    },
    {
      id: 2,
      description: 'Hello World'
    },
    {
      id: 3,
      description: 'Hello World'
    },
    {
      id: 4,
      description: 'Hello World'
    }
  ];
  displayedColumns = ['id', 'description'];

  constructor() { }

  ngOnInit() {
  }

}
