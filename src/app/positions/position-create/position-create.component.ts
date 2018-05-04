import {Component, OnInit} from '@angular/core';
import {Position} from '../../shared/position';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PositionService} from '../../services/position.service';

@Component({
  selector: 'ssi-position-create',
  templateUrl: './position-create.component.html',
  styleUrls: ['./position-create.component.scss']
})
export class PositionCreateComponent implements OnInit {

  positionForm: FormGroup;
  positions: Position[];

  constructor(private positionService: PositionService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
    this.loadData();
  }

  loadData() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  private createForm() {
    this.positionForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      description: ['', Validators.required],
      idParentPosition: ['', Validators.required]
    });
  }

  onSubmit() {
    // const data = {
    //   name: this.positionForm.value.name,
    //   level: this.positionForm.value.level,
    //   description: this.positionForm.value.description,
    //   idParentPosition: this.positionForm.value.parentPosition
    // };

    this.positionService.savePosition(this.positionForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    if (response !== null) {
      this.router.navigate(['positions']);
    }
  }

  private processError(err) {
    console.log(err);
  }
}
