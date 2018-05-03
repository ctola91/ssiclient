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
import {CreateTrainerComponent} from '../trainers/create-trainer/create-trainer.component';
import {PositionDetailComponent} from '../positions/position-detail/position-detail.component';
import {AssignComponent} from '../personal/assign/assign.component';
import {EquipmentComponent} from '../equipment/equipment.component';
import {ContractComponent} from '../contracts/contract.component';
import {CreateContractComponent} from '../contracts/create-contract/create-contract.component';
import {UpdateContractComponent} from '../contracts/update-contract/update-contract.component';


export const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/create', component: CreateComponent},
  { path: 'incidents/report', component: ReportIncidentComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'personal/create',  component: CreatePersonalComponent },
  { path: 'assign',  component: AssignComponent },
  { path: 'trainers',  component: TrainersComponent },
  { path: 'trainers/create', component: CreateTrainerComponent},
  { path: 'trainers/update/:id', component: CreateTrainerComponent},
  { path: 'about',  component: AboutComponent },
  { path: 'organizational-structure',  component: TreeComponent },
  { path: 'departments',  component: DepartmentsComponent },
  { path: 'positions',  component: PositionsComponent },
  { path: 'functions',  component: FunctionsComponent },
  { path: 'requirements',  component: RequirementsComponent },
  { path: 'position-detail/:id',  component: PositionDetailComponent },
  { path: 'equipments', component: EquipmentComponent},
  { path: 'contracts',  component: ContractComponent },
  { path: 'contracts/create',  component: CreateContractComponent },
  { path: 'contracts/update',  component: UpdateContractComponent }

];
