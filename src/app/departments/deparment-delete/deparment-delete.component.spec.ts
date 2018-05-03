import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentDeleteComponent } from './deparment-delete.component';

describe('DeparmentDeleteComponent', () => {
  let component: DeparmentDeleteComponent;
  let fixture: ComponentFixture<DeparmentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
