import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Requirements } from '../../shared/Requirements';
import { ActivatedRoute, Router } from '@angular/router';
import {RequirementsService} from '../../services/requirements.service';
import {PositionService} from '../../services/position.service';
import {MatTableDataSource} from '@angular/material';
import {Position} from '../../shared/position';


@Component({
  selector: 'ssi-create-requirements',
  templateUrl: './create-requirements.component.html',
  styleUrls: ['./create-requirements.component.scss']
})
export class CreateRequirementsComponent implements OnInit {

  contractForm: FormGroup;
  personal: Requirements;

  positions: Position[];


  constructor(private fb: FormBuilder,
              private requirementsService: RequirementsService,
              private route: ActivatedRoute,
              private router: Router,
              private positionService: PositionService) {
    this.createForm();
  }

  ngOnInit() {

    // this.positionService.getPositions()
    //   .subscribe(this.processPositionsData.bind(this),
    //     this.processErrorData.bind(this));

    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  // private processPositionsData(personal: any) {
  //   if ( personal.status === 'ok') {
  //     this.positions = personal.data;
  //   }
  // }
  //
  // private processErrorData(err) {
  //   console.log(err);
  // }

  private createForm() {
    this.contractForm = this.fb.group({
      name: ['', Validators.required ],
      description: ['', Validators.required ],
      position_position_id: ['', Validators.required ],
    });
  }

  onSubmit() {
    this.requirementsService.saveRequirements(this.contractForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    // if(response !== null){
    //   this.router.navigate(['home']);
    //
    // }
    this.router.navigate(['requirements']);

  }

  private processError(err) {
    console.log(err);
  }
}
