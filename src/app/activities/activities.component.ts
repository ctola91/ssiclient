import { Component, OnInit } from '@angular/core';
import {Activity} from '../shared/activity';
import {ActivityService} from '../services/activity.service';
import {ResponseService} from '../shared/responseService';

@Component({
  selector: 'ssi-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activity: Activity[];

  displayedColumns = ['activityId', 'activityNumber', 'activityDetail', 'activityGoal', 'activityTime', 'activityType'];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getListActivities().subscribe(
      activity => this.activity = activity);
  }

  deleteActivity(activity: Activity): void {

    this.activityService.deleteActivity(activity)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    console.log(response.status);
    if (response.status === 'deleted') {
      this.activityService.getListActivities().subscribe(
        activity => this.activity = activity);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
