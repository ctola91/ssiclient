import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Activity} from '../../shared/Activity';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivityService} from '../../services/activity.service';
import {ToastrService} from 'ngx-toastr';
import {ProgramssoService} from '../../services/programsso.service';
import {ProgramSso} from '../../shared/programSso';
import {Trainer} from '../../shared/trainer';
import {TrainerService} from '../../services/trainer.service';
import {Resource} from '../../shared/Resource';
import {Personal} from '../../shared/Personal';
import {ResourceService} from '../../services/resource.service';
import {PersonalService} from '../../services/personal.service';

@Component({
  selector: 'ssi-create-activity',
  templateUrl: './create.activity.component.html',
  styleUrls: ['./create.activity.component.scss']
})
export class CreateActivityComponent implements OnInit {

  activityForm: FormGroup;
  activity: Activity;
  title: String;
  id: number;
  isUpdate: boolean;
  programs: ProgramSso[];
  trainers: Trainer[];
  resources: Resource[];
  personals: Personal[];


  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private programSsoService: ProgramssoService,
              private trainersService: TrainerService,
              private resourceService: ResourceService,
              private personalService: PersonalService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.title = 'Modificar actividad';
        this.isUpdate = true;
        this.id = +params['id'];
        this.findActivity();
      } else {
        this.title = 'Crear actividad';
        this.isUpdate = false;
      }
    });

    this.createForm();

    this.programSsoService.getProgramsSso().subscribe(
      programsSso => this.programs = programsSso);

    this.trainersService.getTrainers().subscribe(
      trainers => this.trainers = trainers);

    this.resourceService.getListResources().subscribe(
      resources => this.resources = resources.data);

    this.personalService.getListPersonals().subscribe(
      personals => this.personals = personals.data);
  }

  private findActivity() {
    this.activityService.findActivityById(this.id).subscribe(activity  => {
      this.activity = activity;
      if (this.isUpdate) {
        this.activityForm.patchValue({
          activityDetail : activity.activityDetail,
          activityGoal : activity.activityGoal,
          // activityNumber : activity.activityNumber,
          // activityTime : activity.activityTime,
          activityType : activity.activityType,
          programsSo : activity.programsSo,
          trainer: activity.trainer,

        });
      }
    });
  }


  createForm() {
    this.activityForm = this.formBuilder.group({
      activityDetail: ['', Validators.required],
      activityGoal: ['', Validators.required],
      // activityNumber: ['', Validators.required],
      // activityTime: ['', Validators.required],
      activityType: ['', Validators.required],
      programsSo: ['', Validators.required],
      trainer: ['', Validators.required]
    });
  }



  onSubmit() {
    if (this.isUpdate) {
      this.activityService.updateActivitySso(this.activityForm.value, this.activity.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.activityService.saveActivitySso(this.activityForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }
  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['activities']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
