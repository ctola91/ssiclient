import {Component, OnInit} from '@angular/core';
import {ProgramSso} from '../../shared/programSso';
import {ProgramssoService} from '../../services/programsso.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ssi-report-programsso',
  templateUrl: './report-programsso.component.html',
  styleUrls: ['./report-programsso.component.scss']
})
export class ReportProgramssoComponent implements OnInit {

  programsso: ProgramSso;
  idProgramsso: number;

  constructor(private route: ActivatedRoute,
              private programssoService: ProgramssoService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.idProgramsso = +params['id'];
        this.findProgramSSO();
      }
    });
  }

  private findProgramSSO() {
    this.programssoService.findProgramSsoById(this.idProgramsso).subscribe(programsso => {
      this.programsso = programsso;
    });
  }

  private print() {
    console.log('imprimir');
  }
}
