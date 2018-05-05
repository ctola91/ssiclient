import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TreeModule} from 'angular-tree-component';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {UserService} from './services/user.service';
import {HomeComponent} from './home/home.component';
import {PersonalComponent} from './personal/personal.component';
import {PersonalService} from './services/personal.service';
import { ContractService } from './services/contract.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IncidentsComponent} from './incidents/incidents.component';
import {CreateComponent} from './incidents/create/create.component';
import {ReportIncidentComponent} from './incidents/report-incident/report-incident.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {TrainersComponent} from './trainers/trainers.component';
import {AboutComponent} from './about/about.component';
import {TreeComponent} from './tree/tree.component';
import {DepartmentsComponent} from './departments/departments.component';
import {PositionsComponent} from './positions/positions.component';
import {FunctionsComponent} from './functions/functions.component';
import {RequirementsComponent} from './requirements/requirements.component';
import {CreatePersonalComponent} from './personal/create-personal/create-personal.component';
import {TrainerService} from './services/trainer.service';
import {IncidentService} from './incidents/shared/incident.service';
import { CreateTrainerComponent } from './trainers/create-trainer/create-trainer.component';
import {PositionService} from './services/position.service';
import {PositionDetailComponent} from './positions/position-detail/position-detail.component';
import {DepartmentService} from './services/department.service';
import { DeparmentDetailComponent } from './departments/deparment-detail/deparment-detail.component';
import { DeparmentCreateComponent } from './departments/deparment-create/deparment-create.component';
import { DeparmentEditComponent } from './departments/deparment-edit/deparment-edit.component';
import { DeparmentDeleteComponent } from './departments/deparment-delete/deparment-delete.component';
import {AreaService} from './services/area.service';

import { AssignComponent } from './personal/assign/assign.component';
import { EquipmentComponent } from './equipment/equipment.component';
import {EquipmentService} from './services/equipment.service';
import {ContractComponent} from './contracts/contract.component';
import {CreateContractComponent} from './contracts/create-contract/create-contract.component';
import {UpdateContractComponent} from './contracts/update-contract/update-contract.component';
import {ContractDataParameters} from './shared/ContractDataParameters';
import {ToastrModule} from 'ngx-toastr';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { PositionDeleteComponent } from './positions/position-delete/position-delete.component';
import { PositionCreateComponent } from './positions/position-create/position-create.component';
import { PositionEditComponent } from './positions/position-edit/position-edit.component';
import {ProgramssoComponent} from './programsso/programsso.component';
import {CreateProgramssoComponent} from './programsso/create-programsso/create-programsso.component';
import {ProgramssoService} from './services/programsso.service';
import { CreateEquipmentComponent } from './equipment/create-equipment/create-equipment.component';
import { DetailEquipmentComponent } from './equipment/detail-equipment/detail-equipment.component';
import { KardexEquipmentComponent } from './equipment/kardex-equipment/kardex-equipment.component';
import {KardexService} from './services/kardex.service';
import { AccidentComponent } from './accident/accident.component';
import {AccidentService} from './services/accident.service';
import {AppUtil} from './shared/AppUtil';
//import { ResourcesComponent } from './resources/resources.component';
//import {ResourceService} from './services/resource.service';
//import {CreateResourceComponent} from './resources/create/create.resource.component';

import { AreasComponent } from './areas/areas.component';
import { AreaCreateComponent } from './areas/area-create/area-create.component';
import { AreaEditComponent } from './areas/area-edit/area-edit.component';
import { AreaDetailComponent } from './areas/area-detail/area-detail.component';
import { AreaDeleteComponent } from './areas/area-delete/area-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReportIncidentComponent,
    IncidentsComponent,
    CreateComponent,
    PersonalComponent,
    TrainersComponent,
    AboutComponent,
    TreeComponent,
    DepartmentsComponent,
    PositionsComponent,
    FunctionsComponent,
    RequirementsComponent,
    CreatePersonalComponent,
    CreateTrainerComponent,
    PositionDetailComponent,
    DeparmentDetailComponent,
    DeparmentCreateComponent,
    DeparmentEditComponent,
    DeparmentDeleteComponent,
    AssignComponent,
    EquipmentComponent,
    ContractComponent,
    CreateContractComponent,
    UpdateContractComponent,
    PositionDeleteComponent,
    PositionCreateComponent,
    PositionEditComponent,
    ProgramssoComponent,
    CreateProgramssoComponent,
    CreateEquipmentComponent,
    DetailEquipmentComponent,
    KardexEquipmentComponent,
    CreateProgramssoComponent,
    DeparmentDeleteComponent,
    AccidentComponent,
    //ResourcesComponent,
    //CreateResourceComponent
    AccidentComponent,
    AreasComponent,
    AreaCreateComponent,
    AreaEditComponent,
    AreaDetailComponent,
    AreaDeleteComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
    MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
    MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule,
    MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule,
    MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeModule,
    ToastrModule.forRoot(),
    NgxChartsModule
  ],
  providers: [UserService
    , PersonalService
    , TrainerService
    , IncidentService
    , AreaService
    , PositionService
    , DepartmentService
    , EquipmentService
    , ContractService
    , ContractDataParameters
    , ProgramssoService
    , KardexService
    , PositionService
    , DepartmentService
    , EquipmentService
    , ContractService
    , ContractDataParameters
    , ProgramssoService
    , DepartmentService
    , AccidentService
    , AppUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
