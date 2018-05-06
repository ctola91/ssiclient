import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../services/resource.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  resources: any = [];
  displayedColumns = ['cost', 'detail', 'action'];

  constructor(
    private resourceService: ResourceService,
    private toastr: ToastrService
  ) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData() {
    this.resourceService.getListResources()
      .subscribe(result => {
        this.resources = result.data;
        console.log(this.resources);
      }, err => {
        console.log(err);
        this.toastr.error(err, 'Ha ocurrido un error inesperado');
      });
  }

  deleteResource(resource: any) {
    this.resourceService.deleteResource(resource)
      .subscribe(result => {
        this.loadData();
        this.toastr.success('El recurso fue eliminado satisfactoriamente', result.status);
      }, error => {
        console.log(error);
        this.toastr.error(error, 'Ha ocurrido un error inesperado');
      });
  }
}
