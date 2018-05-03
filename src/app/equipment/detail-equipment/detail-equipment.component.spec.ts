import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipmentComponent } from './detail-equipment.component';

describe('DetailEquipmentComponent', () => {
  let component: DetailEquipmentComponent;
  let fixture: ComponentFixture<DetailEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
