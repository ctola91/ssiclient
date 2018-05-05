import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Area} from '../../shared/area';
import {AreaService} from '../../services/area.service';

@Component({
  selector: 'ssi-area-edit',
  templateUrl: './area-edit.component.html',
  styleUrls: ['./area-edit.component.scss']
})
export class AreaEditComponent implements OnInit {

  areaForm: FormGroup;
  area: Area;
  idArea: number;

  constructor(private areaServices: AreaService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.idArea = +params['id'];
        this.findArea();
      } else {
        this.router.navigate(['areas']);
      }
    });

    this.createForm();
  }

  private findArea() {
    this.areaServices.getAreaById(this.idArea).subscribe(area => {
      this.area = area;
      this.areaForm.patchValue({
        name: area.name,
        description: area.description
      });
    });
  }

  private createForm() {
    this.areaForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.areaServices.updateArea(this.areaForm.value, this.area.id)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['areas']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
