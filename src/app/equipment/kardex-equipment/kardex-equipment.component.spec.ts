import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexEquipmentComponent } from './kardex-equipment.component';

describe('KardexEquipmentComponent', () => {
  let component: KardexEquipmentComponent;
  let fixture: ComponentFixture<KardexEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
