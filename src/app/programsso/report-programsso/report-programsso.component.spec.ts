import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProgramssoComponent } from './report-programsso.component';

describe('ReportProgramssoComponent', () => {
  let component: ReportProgramssoComponent;
  let fixture: ComponentFixture<ReportProgramssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProgramssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProgramssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
