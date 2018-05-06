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

@Component({
  selector: 'ssi-create-activity',
  templateUrl: './create.activity.component.html',
  styleUrls: ['./create.activity.component.scss']
})
export class CreateActivityComponent implements OnInit {

  activityForm: FormGroup;
  activity: Activity;
  title: String;
  activityId: number;
  isUpdate: boolean;
  programs: ProgramSso[];
  trainers: Trainer[];


  constructor(private fb: FormBuilder,
              private activityService: ActivityService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private programSsoService: ProgramssoService,
              private trainersService: TrainerService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['activityId'] !== undefined) {
        this.title = 'Modificar actividad';
        this.isUpdate = true;
        this.activityId = +params['activityId'];
        this.findResource();
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
  }

  private findResource() {
    this.activityService.findActivityById(this.activityId).subscribe(activity  => {
      this.activity = activity;
      if (this.isUpdate) {
        this.activityForm.patchValue({
          activityId: activity.activityId,
          activityNumber : activity.activityNumber,
          activityDetail : activity.activityDetail,
          activityGoal : activity.activityGoal,
          activityTime : activity.activityTime,
          activityType : activity.activityType});
      }
    });
  }

  createForm() {
    this.activityForm = this.formBuilder.group({
      activityId: ['', Validators.required],
      activityNumber: ['', Validators.required],
      activityDetail: ['', Validators.required],
      activityGoal: ['', Validators.required],
      activityTime: ['', Validators.required],
      activityType: ['', Validators.required],
      programsSo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.activityService.updateActivity(this.activityForm.value, this.activity.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.activityService.saveActivity(this.activityForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }
  saveData() {
    const data = {


  activityId: this.activityForm.value.activityId,
  activityNumber: this.activityForm.value.activityNumber,
  activityDetail: this.activityForm.value.activityDetail,
  activityTime: this.activityForm.value.activityTime,
  activityType: this.activityForm.value.activityType
    };
    if (!this.isUpdate) {
      this.activityService.createNewActivity(data)
        .subscribe((activ: any) => {
          this.toastr.success('La actividad se guardo satisfactoriamente', activ.status);
        }, (error) => {
          console.log(error);
          this.toastr.error(error, 'Ha ocurrido un error inesperado');
        });
    } else {
      this.activityService.updateActivity(data, this.activityId)
        .subscribe(response => {
          this.toastr.success('La actividad fue actualizado satisfactoriamente', response.status);
          this.router.navigateByUrl('/resources');
        }, error => {
          console.log(error);
          this.toastr.error(error, 'Ha ocurrido un error inesperado');
        });
    }
    this.activityForm.reset();
    const form: HTMLFormElement =
      <HTMLFormElement>document.getElementById('form');
    form.reset();
  }

  cancelForm() {
    this.activityForm.reset();
    const form: HTMLFormElement =
      <HTMLFormElement>document.getElementById('form');
    form.reset();
  }
  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['activity']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
