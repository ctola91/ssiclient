import {Component, OnInit} from '@angular/core';
import {Area} from '../../shared/area';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AreaService} from '../../services/area.service';

@Component({
  selector: 'ssi-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.scss']
})
export class AreaCreateComponent implements OnInit {

  areaForm: FormGroup;

  constructor(private areaService: AreaService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.areaForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.areaService.saveArea(this.areaForm.value)
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
