import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionEditComponent } from './position-edit.component';

describe('PositionEditComponent', () => {
  let component: PositionEditComponent;
  let fixture: ComponentFixture<PositionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
