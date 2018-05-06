import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RequirementsService} from '../../services/requirements.service';
import {RequirementsDataParameters} from '../../shared/RequirementsDataParameters';
import {PositionService} from '../../services/position.service';
import {Position} from '../../shared/position';
import {Requirements} from '../../shared/Requirements';

@Component({
  selector: 'ssi-update-requirements',
  templateUrl: './update-requirements.component.html',
  styleUrls: ['./update-requirements.component.scss']
})
export class UpdateRequirementsComponent implements OnInit {

  contractForm: FormGroup;
  requirements: Requirements;
  positions: Position[];

  constructor(private fb: FormBuilder,
              private requirementsService: RequirementsService,
              private route: ActivatedRoute,
              private router: Router,
              private requirementsDataParameters: RequirementsDataParameters,
              private positionService: PositionService) {
    this.createForm();
  }

  ngOnInit() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  private createForm() {
    this.contractForm = this.fb.group({
      id: [this.requirementsDataParameters.requirementsUpdate.id, Validators.required ],
      name: [this.requirementsDataParameters.requirementsUpdate.name, Validators.required ],
      description: [this.requirementsDataParameters.requirementsUpdate.description, Validators.required ],
      position_position_id: [this.requirementsDataParameters.requirementsUpdate.position_position_id, Validators.required ],

    });
  }

  onSubmit() {
    this.requirementsService.updateRequirement(this.contractForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
   this.router.navigate(['requirements']);

  }

  private processError(err) {
    console.log(err);
  }
}
