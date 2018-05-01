import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { CreateComponent } from '../incidents/create/create.component';
import { IncidentsComponent } from '../incidents/incidents.component';
import { ReportIncidentComponent } from '../incidents/report-incident/report-incident.component';


export const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/create', component: CreateComponent},
  { path: 'incidents/report', component: ReportIncidentComponent},
  { path: 'home',  component: HomeComponent }
];
