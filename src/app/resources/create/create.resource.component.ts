import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Resource} from '../../shared/resource';
import {ActivatedRoute, Router} from '@angular/router';
import {ResourceService} from '../../services/resource.service';
import {ToastrService} from 'ngx-toastr';
import {ActivityService} from '../../services/activity.service';
import {Activity} from '../../shared/Activity';

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
  activities: Activity[];


  constructor(private fb: FormBuilder,
              private resourceService: ResourceService,
              private route: ActivatedRoute,
              private router: Router,
              private toastr: ToastrService,
              private activityService: ActivityService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.title = 'Modificar recurso';
        this.isUpdate = true;
        this.idResource = +params['id'];
        this.findResource();
      } else {
        this.title = 'Crear recurso';
        this.isUpdate = false;
      }
    });

    this.createForm();
    this.activityService.getListActivities().subscribe(
      activitySso => this.activities = activitySso.data);
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

  createForm() {
    this.resourceForm = this.formBuilder.group({
      idResource: ['', Validators.required],
      costResource: ['', Validators.required],
      detailResource: ['', Validators.required],
      activityDetail: ['', Validators.required]
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

  saveData() {
    const data = {
      idResource: this.resourceForm.value.id,
      costResource: this.resourceForm.value.costResource,
      detailResource: this.resourceForm.value.detailResource,
      versionResource: 1,
      activity: this.resourceForm.value.activityDetail,
      status: this.resourceForm.value.status
    };
    if (!this.isUpdate) {
      this.resourceService.createNewResource(data)
        .subscribe((resource: any) => {
          this.toastr.success('El recurso se guardo satisfactoriamente', resource.status);
        }, (error) => {
          console.log(error);
          this.toastr.error(error, 'Ha ocurrido un error inesperado');
        });
    } else {
      this.resourceService.updateResource(data, this.idResource)
        .subscribe(response => {
          this.toastr.success('El recurso fue actualizado satisfactoriamente', response.status);
          this.router.navigateByUrl('/resources');
        }, error => {
          console.log(error);
          this.toastr.error(error, 'Ha ocurrido un error inesperado');
        });
    }
    this.resourceForm.reset();
    const form: HTMLFormElement =
      <HTMLFormElement>document.getElementById('form');
    form.reset();
  }

  cancelForm() {
    this.resourceForm.reset();
    const form: HTMLFormElement =
      <HTMLFormElement>document.getElementById('form');
    form.reset();
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
