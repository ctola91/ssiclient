import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RequirementsService} from '../../services/requirements.service';
import {RequirementsDataParameters} from '../../shared/RequirementsDataParameters';
import {PositionService} from '../../services/position.service';
import {Position} from '../../shared/position';
import {Requirements} from '../../shared/Requirements';
import {FunctionsService} from '../../services/functions.service';
import {FunctionsDataParameters} from '../../shared/FunctionsDataParameters';
import {Functions} from '../../shared/Functions';

@Component({
  selector: 'ssi-update-requirements',
  templateUrl: './update-functions.component.html',
  styleUrls: ['./update-functions.component.scss']
})
export class UpdateFunctionsComponent implements OnInit {

  contractForm: FormGroup;
  requirements: Functions;
  positions: Position[];

  constructor(private fb: FormBuilder,
              private functionsService: FunctionsService,
              private route: ActivatedRoute,
              private router: Router,
              private functionsDataParameters: FunctionsDataParameters,
              private positionService: PositionService) {
    this.createForm();
  }

  ngOnInit() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
  }

  private createForm() {
    this.contractForm = this.fb.group({
      id: [this.functionsDataParameters.functionsUpdate.id, Validators.required ],
      name: [this.functionsDataParameters.functionsUpdate.name, Validators.required ],
      description: [this.functionsDataParameters.functionsUpdate.description, Validators.required ],
      position_position_id: [this.functionsDataParameters.functionsUpdate.position_position_id, Validators.required ],

    });
  }

  onSubmit() {
    this.functionsService.updateFunctions(this.contractForm.value)
      .subscribe(this.processData.bind(this), this.processError.bind(this));
  }

  private processData(response: any) {
    // if(response !== null){
    //   this.router.navigate(['home']);
    //
    // }
    this.router.navigate(['functions']);

  }

  private processError(err) {
    console.log(err);
  }
}
