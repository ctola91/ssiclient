import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPositionsComponent } from './report-positions.component';

describe('ReportPositionsComponent', () => {
  let component: ReportPositionsComponent;
  let fixture: ComponentFixture<ReportPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
