import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePersonalAreaComponent } from './reporte-personal-area.component';

describe('ReportePersonalAreaComponent', () => {
  let component: ReportePersonalAreaComponent;
  let fixture: ComponentFixture<ReportePersonalAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePersonalAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePersonalAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
