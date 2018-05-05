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
  idResource: number;
  isUpdate: boolean;

  constructor(private fb: FormBuilder,
              private resourceService: ResourceService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['idResource'] !== undefined) {
        this.title = 'Modificar recurso';
        this.isUpdate = true;
        this.idResource = +params['idResource'];
        this.findResource();
      } else {
        this.title = 'Crear recurso';
        this.isUpdate = false;
      }
    });

    this.createForm();
  }

  private findResource() {
    this.resourceService.findResourceById(this.idResource).subscribe(resource  => {
      this.resource = resource;
      if (this.isUpdate) {
        this.resourceForm.patchValue({
          idResource: resource.idResource,
          costResource: resource.costResource,
          detailResource: resource.detailResource});
      }
    });
  }

  private createForm() {
    this.resourceForm = this.fb.group({
      costResource: ['', Validators.required],
      detailResource: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.resourceService.updateResource(this.resourceForm.value, this.resource.idResource)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    } else {
      this.resourceService.saveResource(this.resourceForm.value)
        .subscribe(this.processData.bind(this), this.processError.bind(this));
    }

  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['resource']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
