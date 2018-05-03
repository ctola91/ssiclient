import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentCreateComponent } from './deparment-create.component';

describe('DeparmentCreateComponent', () => {
  let component: DeparmentCreateComponent;
  let fixture: ComponentFixture<DeparmentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
