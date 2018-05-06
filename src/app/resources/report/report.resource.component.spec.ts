import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportResourceComponent } from './report.resource.component';

describe('ReportResourceComponent', () => {
  let component: ReportResourceComponent;
  let fixture: ComponentFixture<ReportResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportResourceComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
