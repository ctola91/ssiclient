import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../../services/activity.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-report-activity',
  templateUrl: './report.activity.component.html',
  styleUrls: ['./report.activity.component.scss']
})
export class ReportActivityComponent implements OnInit {
  view: number[] = [700, 300];
  data: any[];

  constructor(
    private activityService: ActivityService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.activityService.getListActivities()
      .subscribe((res) => {
        this.data = this.formatData(res.data);
      }, (err) => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  formatData(data: any[]): any[] {
    console.log(data);
    let countActivities = 0;
    data.forEach((el) => {
      countActivities++;
      }
    );
    return [
      {
        'name': 'actividad',
        'value': countActivities
      }
    ];
  }
}
