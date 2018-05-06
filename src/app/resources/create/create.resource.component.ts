import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../shared/resource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ssi-create.resource',
  templateUrl: './create.resource.component.html',
  styleUrls: ['./create.resource.component.scss']
})
export class CreateResourceComponent implements OnInit {

  resourceForm: FormGroup;
  resource: Resource;

  constructor(private fb: FormBuilder,
              private resourceService: ResourceService,
              private route: ActivatedRoute,
              private router: Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.resourceForm = this.fb.group({
      cost: ['', Validators.required ],
      detail: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.resourceService.saveResource(this.resourceForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if(response !== null){
      this.router.navigate(['home']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
