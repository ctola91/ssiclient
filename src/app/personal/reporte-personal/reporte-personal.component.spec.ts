import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePersonalComponent } from './reporte-personal.component';

describe('ReportePersonalComponent', () => {
  let component: ReportePersonalComponent;
  let fixture: ComponentFixture<ReportePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
