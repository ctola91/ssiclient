import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportManualFunctionsComponent } from './report-manual-functions.component';

describe('ReportManualFunctionsComponent', () => {
  let component: ReportManualFunctionsComponent;
  let fixture: ComponentFixture<ReportManualFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportManualFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportManualFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
