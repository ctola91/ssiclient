import { Component, OnInit } from '@angular/core';
import {Resource} from '../shared/resource';
import {ResourceService} from '../services/resource.service';
import {ResponseService} from '../shared/responseService';

@Component({
  selector: 'ssi-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  resource: Resource[];

  displayedColumns = ['idResource', 'costResource', 'detailResource'];

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
    this.resourceService.getListResources().subscribe(
      resource => this.resource = resource);
  }

  deleteResource(resource: Resource): void {

    this.resourceService.deleteResource(resource)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: ResponseService) {
    console.log(response.status);
    if (response.status === 'deleted') {
      this.resourceService.getListResources().subscribe(
        resource => this.resource = resource);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
