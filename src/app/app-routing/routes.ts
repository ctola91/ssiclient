import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { CreateComponent } from '../incidents/create/create.component';
import { IncidentsComponent } from '../incidents/incidents.component';
import { ReportIncidentComponent } from '../incidents/report-incident/report-incident.component';
import {TrainersComponent} from '../trainers/trainers.component';
import {AboutComponent} from '../about/about.component';
import {TreeComponent} from '../tree/tree.component';
import {DepartmentsComponent} from '../departments/departments.component';
import {PositionsComponent} from '../positions/positions.component';
import {FunctionsComponent} from '../functions/functions.component';
import {RequirementsComponent} from '../requirements/requirements.component';
import {CreatePersonalComponent} from '../personal/create-personal/create-personal.component';
import {PositionDetailComponent} from '../positions/position-detail/position-detail.component';
import {AccidentComponent} from '../accident/accident.component';

export const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/create', component: CreateComponent},
  { path: 'incidents/report', component: ReportIncidentComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'personal/create',  component: CreatePersonalComponent },
  { path: 'trainers',  component: TrainersComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'organizational-structure',  component: TreeComponent },
  { path: 'departments',  component: DepartmentsComponent },
  { path: 'positions',  component: PositionsComponent },
  { path: 'functions',  component: FunctionsComponent },
  { path: 'requirements',  component: RequirementsComponent },
  { path: 'position-detail/:id',  component: PositionDetailComponent },
  { path: 'accident',  component: AccidentComponent },
];
