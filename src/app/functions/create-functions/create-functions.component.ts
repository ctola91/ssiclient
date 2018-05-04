import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {PositionService} from '../../services/position.service';
import {Position} from '../../shared/position';
import {Functions} from '../../shared/Functions';
import {FunctionsService} from '../../services/functions.service';


@Component({
  selector: 'ssi-create-functions',
  templateUrl: './create-functions.component.html',
  styleUrls: ['./create-functions.component.scss']
})
export class CreateFunctionsComponent implements OnInit {

  contractForm: FormGroup;
  personal: Functions;

  positions: Position[];


  constructor(private fb: FormBuilder,
              private functionsService: FunctionsService,
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
    this.functionsService.saveFunctions(this.contractForm.value)
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
