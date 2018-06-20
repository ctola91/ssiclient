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
import {ResourcesComponent} from '../resources/resources.component';
import {CreateResourceComponent} from '../resources/create/create.resource.component';
import {AreasComponent} from '../areas/areas.component';
import {AreaCreateComponent} from '../areas/area-create/area-create.component';
import {AreaEditComponent} from '../areas/area-edit/area-edit.component';
import {PersonalComponent} from '../personal/personal.component';
import {InventoryComponent} from '../inventory/inventory.component';
import {CrateKardexComponent} from '../kardex/crate-kardex/crate-kardex.component';
import {CreateInventoryComponent} from '../inventory/create-inventory/create-inventory.component';
import {KardexComponent} from '../kardex/kardex.component';
import {DetailEquipmentComponent} from '../equipment/detail-equipment/detail-equipment.component';
import {KardexEquipmentComponent} from '../equipment/kardex-equipment/kardex-equipment.component';
import {UpdateComponent} from '../equipment/update/update.component';
import {ActivitiesComponent} from '../activities/activities.component';
import {ReportProgramssoComponent} from '../programsso/report-programsso/report-programsso.component';
import {AddPersonalActivitiesComponent} from '../activities/add-personal-activities/add-personal-activities.component';
import {LogoutComponent} from '../logout/logout.component';
import {ReportManualFunctionsComponent} from '../positions/report-manual-functions/report-manual-functions.component';
import {ReportPositionsComponent} from '../positions/report-positions/report-positions.component';
import {PersonalContractPositionComponent} from '../personal/personal-contract-position/personal-contract-position.component';
import {CreateFunctionsComponent} from '../functions/create-functions/create-functions.component';
import {UpdateFunctionsComponent} from '../functions/update-functions/update-functions.component';
import {CreateRequirementsComponent} from '../requirements/create-requirements/create-requirements.component';
import {UpdateRequirementsComponent} from '../requirements/update-requirements/update-requirements.component';
import {CreateActivityComponent} from '../activities/create/create.activity.component';
import {ReportResourceComponent} from '../resources/report/report.resource.component';
import {ReportActivityComponent} from '../activities/report/report.activity.component';
import {ReportePersonalComponent} from '../personal/reporte-personal/reporte-personal.component';
import {ReportePersonalAreaComponent} from '../personal/reporte-personal-area/reporte-personal-area.component';
import {AuditComponent} from '../audit/audit.component';
import {EtlComponent} from '../etl/etl.component';
import {UsersComponent} from '../users/users.component';
import {CreateUsersComponent} from '../users/create-user/create-users.component';

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
  { path: 'resources',  component: ResourcesComponent },
  { path: 'resources/create', component: CreateResourceComponent},
  { path: 'areas',  component: AreasComponent },
  { path: 'areas/create', component: AreaCreateComponent},
  { path: 'areas/update/:id', component: AreaEditComponent},
  { path: 'kardex', component: KardexComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'kardex/create', component: CrateKardexComponent},
  { path: 'inventory/create', component: CreateInventoryComponent},
  { path: 'activities',  component: ActivitiesComponent },
  { path: 'programsso/reportprogramsso/:id', component: ReportProgramssoComponent},
  { path: 'activities/addpersonalactivitisso/:id', component: AddPersonalActivitiesComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'reporte/cargos-empresa', component: ReportPositionsComponent},
  { path: 'reporte/manual-funciones', component: ReportManualFunctionsComponent},
  { path: 'reporte/personal', component: ReportePersonalComponent},
  { path: 'reporte/area', component: ReportePersonalAreaComponent},
  { path: 'reporte/iperc', component: TreeComponent},
  { path: 'reporte/programa-sso', component: TreeComponent},
  { path: 'reporte/recursos-sso', component: TreeComponent},
  { path: 'reporte/equipamiento', component: TreeComponent},
  { path: 'reporte/inventario', component: TreeComponent},
  { path: 'personal/personal-contract-position', component: PersonalContractPositionComponent},
  { path: 'equipments/detail/:id',  component: DetailEquipmentComponent },
  { path: 'equipments/kardex/:id',  component: KardexEquipmentComponent },
  { path: 'equipments/update/:id',  component: UpdateComponent },
  { path: 'functions/create',  component: CreateFunctionsComponent},
  { path: 'functions/update',  component: UpdateFunctionsComponent},
  { path: 'requirements/create',  component: CreateRequirementsComponent},
  { path: 'requirements/update',  component: UpdateRequirementsComponent},
  { path: 'activities/create', component: CreateActivityComponent},
  { path: 'resources/report', component: ReportResourceComponent},
  { path: 'activities/report', component: ReportActivityComponent},
  { path: 'reporte/etl', component: EtlComponent},

  { path: 'resources/update/:id', component: CreateResourceComponent},
  { path: 'activities/update/:id', component: CreateActivityComponent},
  { path: 'audit', component: AuditComponent},
  { path: 'users', component: UsersComponent },
  { path: 'users/create', component: CreateUsersComponent },
  { path: 'users/update/:id', component: CreateUsersComponent }
];
