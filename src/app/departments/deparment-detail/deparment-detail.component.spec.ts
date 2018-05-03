import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmentDetailComponent } from './deparment-detail.component';

describe('DeparmentDetailComponent', () => {
  let component: DeparmentDetailComponent;
  let fixture: ComponentFixture<DeparmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
