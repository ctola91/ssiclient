import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentEditComponent } from './deparment-edit.component';

describe('DeparmentEditComponent', () => {
  let component: DeparmentEditComponent;
  let fixture: ComponentFixture<DeparmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
