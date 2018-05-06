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
import {DeparmentCreateComponent} from '../departments/deparment-create/deparment-create.component';
import {DeparmentEditComponent} from '../departments/deparment-edit/deparment-edit.component';
import {PositionsComponent} from '../positions/positions.component';
import {FunctionsComponent} from '../functions/functions.component';
import {RequirementsComponent} from '../requirements/requirements.component';
import {CreatePersonalComponent} from '../personal/create-personal/create-personal.component';
import {CreateTrainerComponent} from '../trainers/create-trainer/create-trainer.component';
import {PositionDetailComponent} from '../positions/position-detail/position-detail.component';
import {AssignComponent} from '../personal/assign/assign.component';
import {EquipmentComponent} from '../equipment/equipment.component';
import {CreateProgramssoComponent} from '../programsso/create-programsso/create-programsso.component';
import {ProgramssoComponent} from '../programsso/programsso.component';
import {ContractComponent} from '../contracts/contract.component';
import {CreateContractComponent} from '../contracts/create-contract/create-contract.component';
import {UpdateContractComponent} from '../contracts/update-contract/update-contract.component';
import {PositionCreateComponent} from '../positions/position-create/position-create.component';
import {PositionEditComponent} from '../positions/position-edit/position-edit.component';
import {CreateEquipmentComponent} from '../equipment/create-equipment/create-equipment.component';
import {AccidentComponent} from '../accident/accident.component';
import {ResourcesComponent} from '../resources/resources.component';
import {CreateResourceComponent} from '../resources/create/create.resource.component';
import {AreasComponent} from '../areas/areas.component';
import {AreaCreateComponent} from '../areas/area-create/area-create.component';
import {AreaEditComponent} from '../areas/area-edit/area-edit.component';
import {PersonalComponent} from '../personal/personal.component';
import {Inventory} from '../shared/Inventory';
import {InventoryComponent} from '../inventory/inventory.component';
import {CrateKardexComponent} from '../kardex/crate-kardex/crate-kardex.component';
import {CreateInventoryComponent} from '../inventory/create-inventory/create-inventory.component';
import {KardexComponent} from '../kardex/kardex.component';
import {ActivitiesComponent} from '../activities/activities.component';

export const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'incidents/create', component: CreateComponent},
  { path: 'incidents/update/:id', component: CreateComponent},
  { path: 'incidents/report', component: ReportIncidentComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'personal', component: PersonalComponent},
  { path: 'personal/create',  component: CreatePersonalComponent },
  { path: 'personal/update/:id',  component: CreatePersonalComponent },
  { path: 'assign',  component: AssignComponent },
  { path: 'trainers',  component: TrainersComponent },
  { path: 'trainers/create', component: CreateTrainerComponent},
  { path: 'trainers/update/:id', component: CreateTrainerComponent},
  { path: 'about',  component: AboutComponent },
  { path: 'organizational-structure',  component: TreeComponent },
  { path: 'departments',  component: DepartmentsComponent },
  { path: 'departments/create', component: DeparmentCreateComponent},
  { path: 'departments/update/:id', component: DeparmentEditComponent},
  { path: 'positions',  component: PositionsComponent },
  { path: 'positions/create', component: PositionCreateComponent},
  { path: 'positions/update/:id', component: PositionEditComponent},
  { path: 'positions/detail/:id',  component: PositionDetailComponent },
  { path: 'functions',  component: FunctionsComponent },
  { path: 'requirements',  component: RequirementsComponent },
  { path: 'equipments', component: EquipmentComponent},
  { path: 'programsso',  component: ProgramssoComponent },
  { path: 'programsso/create', component: CreateProgramssoComponent},
  { path: 'programsso/update/:id', component: CreateProgramssoComponent},
  { path: 'contracts',  component: ContractComponent },
  { path: 'contracts/create',  component: CreateContractComponent },
  { path: 'contracts/update',  component: UpdateContractComponent },
  { path: 'equipments/create',  component: CreateEquipmentComponent },
  { path: 'contracts/update',  component: UpdateContractComponent },
  { path: 'position-detail/:id',  component: PositionDetailComponent },
  { path: 'accident',  component: AccidentComponent },
  { path: 'resources',  component: ResourcesComponent },
  { path: 'resources/create', component: CreateResourceComponent},
  { path: 'areas',  component: AreasComponent },
  { path: 'areas/create', component: AreaCreateComponent},
  { path: 'areas/update/:id', component: AreaEditComponent},
  { path: 'kardex', component: KardexComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'kardex/create', component: CrateKardexComponent},
  { path: 'inventory/create', component: CreateInventoryComponent},
  { path: 'activities',  component: ActivitiesComponent }

];
