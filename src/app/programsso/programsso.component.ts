import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResponseService} from '../shared/responseService';
import {ProgramSso} from '../shared/programSso';
import {ProgramssoService} from '../services/programsso.service';

@Component({
  selector: 'ssi-programsso',
  templateUrl: './programsso.component.html',
  styleUrls: ['./programsso.component.scss']
})
export class ProgramssoComponent implements OnInit {

  programsSso: ProgramSso[];

  displayedColumns = ['ssoObjetive', 'ssoIndicator', 'ssoGoal', 'ssoExecutionTime', 'ssoResponsable', 'ssoTotalCost', 'Accion'];

  constructor(private programSsoService: ProgramssoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.programSsoService.getProgramsSso().subscribe(
      programsSso => this.programsSso = programsSso);
  }

  deleteProgramSso(programSso: ProgramSso): void {

    this.programSsoService.deleteProgramSso(programSso)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    console.log(response.status);
    if (response.status === 'deleted') {
      this.programSsoService.getProgramsSso().subscribe(
        programsSso => this.programsSso = programsSso);
    }
  }

  private processError(err) {
    console.log(err);
  }

}
