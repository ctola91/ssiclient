import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-report-resource',
  templateUrl: './report.resource.component.html',
  styleUrls: ['./report.resource.component.scss']
})
export class ReportResourceComponent implements OnInit {
  view: number[] = [700, 300];
  data: any[];

  constructor(
    private resourceService: ResourceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resourceService.getListResources()
      .subscribe((res) => {
        this.data = this.formatData(res.data);
      }, (err) => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  formatData(data: any[]): any[] {
    console.log(data);
    let countResources = 0;
    data.forEach((el) => {
      countResources++;
    }
    );
    return [
      {
        'name': 'recurso',
        'value': countResources
      }
    ];
  }
}
