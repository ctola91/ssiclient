import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {IncidentsComponent} from './incidents/incidents.component';
import {CreateComponent} from './incidents/create/create.component';
import {ReportIncidentComponent} from './incidents/report-incident/report-incident.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/create', component: CreateComponent},
  { path: 'incidents/report', component: ReportIncidentComponent},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
