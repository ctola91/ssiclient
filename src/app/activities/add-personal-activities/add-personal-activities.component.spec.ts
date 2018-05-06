import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonalActivitiesComponent } from './add-personal-activities.component';

describe('AddPersonalActivitiesComponent', () => {
  let component: AddPersonalActivitiesComponent;
  let fixture: ComponentFixture<AddPersonalActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonalActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonalActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
