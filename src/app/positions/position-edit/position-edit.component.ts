import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Position} from '../../shared/position';
import {PositionService} from '../../services/position.service';

@Component({
  selector: 'ssi-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {

  positionForm: FormGroup;
  position: Position;
  idPosition: number;
  positions: Position[];

  constructor(private positionService: PositionService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.loadData();

    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id'] !== undefined) {
        this.idPosition = +params['id'];
        this.findPosition();
      } else {
        this.router.navigate(['positions']);
      }
    });

    this.createForm();
  }

  loadData() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  private findPosition() {
    this.positionService.getPositionById(this.idPosition).subscribe(position => {
      this.position = position;
      this.positionForm.patchValue({
        name: position.name,
        level: position.level,
        idParentPosition: position.idParentPosition,
        description: position.description
      });
    });
  }

  private createForm() {
    this.positionForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', Validators.required],
      idParentPosition: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.positionService.updatePosition(this.positionForm.value, this.position.id)
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
