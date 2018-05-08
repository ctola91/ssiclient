import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProgramSso} from '../../shared/programSso';
import {ActivatedRoute, Router} from '@angular/router';
//import {ProgramSsoService} from '../../services/programsso.service';
import {ToastrService} from 'ngx-toastr';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'ssi-report-programsso',
  templateUrl: './report-programsso.component.html',
  styleUrls: ['./report-programsso.component.scss']
})
export class ReportProgramssoComponent implements OnInit {
  programForm: FormGroup;
  programsso: ProgramSso;
  title: String;
  idResource: number;
  isUpdate: boolean;
  activities: any[];

  constructor(private fb: FormBuilder,
             // private programService: ProgramSsoService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private activityService: ActivityService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['idResource'] !== undefined) {
        this.title = 'Modificar recurso';
        this.isUpdate = true;
        this.idResource = +params['idResource'];
        //this.findResource();
      } else {
        this.title = 'Crear recurso';
        this.isUpdate = false;
      }
    });

    //this.createForm();


  }
  /*private findResource() {
    this.resourceService.findResourceById(this.idResource).subscribe(resource  => {
      this.resource = resource;
      if (this.isUpdate) {
        this.resourceForm.patchValue({
          idResource: resource.idResource,
          costResource: resource.costResource,
          detailResource: resource.detailResource});
      }
    });
  }

  createForm() {
    this.programFormForm = this.formBuilder.group({
      idResource: ['', Validators.required],
      costResource: ['', Validators.required],
      detailResource: ['', Validators.required],
      activityDetail: ['', Validators.required]
    });
  }
  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['resource']);
    }
  }

  private processError(err) {
    console.log(err);
  }*/

}
