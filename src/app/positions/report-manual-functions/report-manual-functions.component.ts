///<reference path="../../../../node_modules/@angular/forms/src/validators.d.ts"/>
import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild, ɵConsole} from '@angular/core';
import {PositionService} from '../../services/position.service';
import { ActivatedRoute, Router } from '@angular/router';
import {RequirementsService} from '../../services/requirements.service';
import {Location} from '@angular/common';
import {Requirements} from '../../shared/Requirements';
import {Functions} from '../../shared/Functions';
import {FunctionsService} from '../../services/functions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ssi-report-manual-functions',
  templateUrl: './report-manual-functions.component.html',
  styleUrls: ['./report-manual-functions.component.scss']
})
export class ReportManualFunctionsComponent implements OnInit, OnChanges {
  displayedColumns = ['Nombre', 'Descripcion'];
  requirements: Requirements[];
  functions: Functions[];
  positions: Position[];
 contractForm: FormGroup;
  post: Position[];
  cargo: string;


  constructor(private positionService: PositionService,
              private requirementsService: RequirementsService,
              private functionsService: FunctionsService,
              private router: Router,
              private fb: FormBuilder,
              private location: Location) {
    this.createForm();
  }
  ngOnChanges() {
    this.requirementsService.getRequirementById(this.contractForm.value.position_position_id).subscribe(
      requirements => {
        this.requirements = requirements.data;
      });
    this.functionsService.getFunctionById(this.contractForm.value.position_position_id).subscribe(
      functions => {
        this.functions = functions.data;
      });
  }
  ngOnInit() {
    this.positionService.getPositions().subscribe(
      positions => this.positions = positions);
    this.requirementsService.getListRequirements().subscribe(
      requirements => {
        this.requirements = requirements.data;
      });
    this.functionsService.getAllFunctionPositions().subscribe(
      functions => {
        this.functions = functions.data;
      });
  }
  private createForm() {
       this.contractForm = this.fb.group({
    position_position_id: ['', Validators.required ],
  });
}
  onSubmit() {
      // this.functionsService.saveFunctions(this.contractForm.value)
      //   .subscribe(this.processData.bind(this), this.processError.bind(this));
    console.log(this.contractForm.value);
    this.ngOnChanges();
   }

   private processData(response: any) {

     this.router.navigate(['reporte/manual-funciones']);

   }
  private processError(err) {
    console.log(err);
  }


}
