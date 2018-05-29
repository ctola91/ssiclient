import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../services/activity.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  activities: any = [];
  displayedColumns = [  'activityDetail', 'activityGoal', 'activityType' , 'Action'];

  constructor(
    private activityService: ActivityService,
    private toastr: ToastrService
  ) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.activityService.getListActivities()
      .subscribe(result => {
        this.activities = result.data;
        console.log(this.activities);
      }, err => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  deleteActivity(activity: any) {
    this.activityService.deleteActivity(activity)
      .subscribe(result => {
        this.loadData();
        this.toastr.success('La actividad fue eliminada satisfactoriamente', result.status);
      }, error => {
        console.log(error);
        this.toastr.error(error, 'Ha ocurrido un error inesperado');
      });
  }
}
