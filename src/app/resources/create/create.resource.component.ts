import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Resource} from '../../shared/resource';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceService} from '../../services/resource.service';

@Component({
  selector: 'ssi-create-resource',
  templateUrl: './create.resource.component.html',
  styleUrls: ['./create.resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  resourceForm: FormGroup;
  resource: Resource;
  title: String;
  resourceId: number;
  isUpdate: boolean;

  constructor(private fb: FormBuilder,
              private resourceService: ResourceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.title = 'Modificar recurso';
        this.isUpdate = true;
        this.resourceId = +params['id'];
        this.findResource();
      } else {
        this.title = 'Crear recurso';
        this.isUpdate = false;
      }
    });

    this.createForm();
  }

  private findResource() {
    this.resourceService.findResourceById(this.resourceId).subscribe(resource  => {
      this.resource = resource;
      if (this.isUpdate) {
        this.resourceForm.patchValue({
          resourceCost: resource.resourceCost,
          resourceDetail: resource.resourceDetail
        });
      }
    });
  }

  private createForm() {
    this.resourceForm = this.fb.group({
      resourceCost: ['', Validators.required],
      resourceDetail: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.resourceService.updateResource(this.resourceForm.value, this.resource.resourceId)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.resourceService.saveResource(this.resourceForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }
  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['resources']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
