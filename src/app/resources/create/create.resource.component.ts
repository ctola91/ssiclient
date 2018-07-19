import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Resource} from '../../shared/Resource';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceService} from '../../services/resource.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'ssi-create-resource',
  templateUrl: './create.resource.component.html',
  styleUrls: ['./create.resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  resourceForm: FormGroup;
  resource: Resource;
  title: String;
  id: number;
  isUpdate: boolean;

  constructor(private fb: FormBuilder,
              private resourceService: ResourceService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.title = 'Modificar recurso';
        this.isUpdate = true;
        this.id = +params['id'];
        this.findResource();
      } else {
        this.title = 'Crear recurso';
        this.isUpdate = false;
      }
    });

    this.createForm();
  }

  private findResource() {
    this.resourceService.findResourceById(this.id).subscribe(resource  => {
      this.resource = resource;
      if (this.isUpdate) {
        this.resourceForm.patchValue({
          resourceCost: resource.resourceCost,
          resourceDetail: resource.resourceDetail
        });
      }
    });
  }

createForm() {
    this.resourceForm = this.fb.group({
      resourceCost: ['', Validators.required],
      resourceDetail: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.isUpdate) {
      this.resourceService.updateResourceSso(this.resourceForm.value, this.resource.id)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.resourceService.saveResourceSso(this.resourceForm.value)
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
