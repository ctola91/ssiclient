import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionDeleteComponent } from './position-delete.component';

describe('PositionDeleteComponent', () => {
  let component: PositionDeleteComponent;
  let fixture: ComponentFixture<PositionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
