import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportActivityComponent } from './report.activity.component';

describe('ReportResourceComponent', () => {
  let component: ReportActivityComponent;
  let fixture: ComponentFixture<ReportActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportActivityComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
