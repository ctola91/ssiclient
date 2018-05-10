import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProgramSso} from '../../shared/programSso';
import {ProgramssoService} from '../../services/programsso.service';

@Component({
  selector: 'ssi-create-programsso',
  templateUrl: './create-programsso.component.html',
  styleUrls: ['./create-programsso.component.scss']
})
export class CreateProgramssoComponent implements OnInit {

  programssoForm: FormGroup;
  programsso: ProgramSso;
  title: String;
  idProgramsso: number;
  isUpdate: boolean;

  constructor(private fb: FormBuilder,
              private programssoService: ProgramssoService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        this.title = 'Modificar Programa SSO';
        this.isUpdate = true;
        this.idProgramsso = +params['id'];
        this.findProgramSSO();
      } else {
        this.title = 'Crear Programa SSO';
        this.isUpdate = false;
      }
    });

    this.createForm();
  }

  private findProgramSSO() {
    this.programssoService.findProgramSsoById(this.idProgramsso).subscribe(programsso  => {
      this.programsso = programsso;
      if (this.isUpdate) {
        this.programssoForm.patchValue({
          ssoObjetive: programsso.ssoObjetive,
          ssoIndicator: programsso.ssoIndicator,
          ssoGoal: programsso.ssoGoal,
          ssoExecutionTime: programsso.ssoExecutionTime,
          ssoResponsable: programsso.ssoResponsable,
          ssoTotalCost: programsso.ssoTotalCost
        });
      }
    });
  }

  private createForm() {
    this.programssoForm = this.fb.group({
      ssoObjetive: ['', Validators.required],
      ssoIndicator: ['', Validators.required],
      ssoGoal: ['', Validators.required],
      ssoExecutionTime: ['', Validators.required],
      ssoResponsable: ['', Validators.required],
      ssoTotalCost: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.programssoService.updateProgramSso(this.programssoForm.value, this.programsso.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.programssoService.saveProgramSso(this.programssoForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['programsso']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
