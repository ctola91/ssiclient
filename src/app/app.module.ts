import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { PersonalService } from './services/personal.service';



import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentsComponent } from './incidents/incidents.component';
import { CreateComponent } from './incidents/create/create.component';
import { ReportIncidentComponent } from './incidents/report-incident/report-incident.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TrainersComponent } from './trainers/trainers.component';
import { AboutComponent } from './about/about.component';
import { TreeComponent } from './tree/tree.component';
import { DepartmentsComponent } from './departments/departments.component';
import { PositionsComponent } from './positions/positions.component';
import { FunctionsComponent } from './functions/functions.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { CreatePersonalComponent } from './personal/create-personal/create-personal.component';
import {TrainerService} from './services/trainer.service';
import {IncidentService} from './incidents/shared/incident.service';
import { EquipmentComponent } from './equipment/equipment.component';
import {EquipmentService} from './services/equipment.service';

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
    EquipmentComponent

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
    MatTabsModule, MatToolbarModule, MatTooltipModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, PersonalService, TrainerService, IncidentService, EquipmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
