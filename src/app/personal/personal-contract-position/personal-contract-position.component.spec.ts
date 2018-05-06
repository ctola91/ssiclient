import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalContractPositionComponent } from './personal-contract-position.component';

describe('PersonalContractPositionComponent', () => {
  let component: PersonalContractPositionComponent;
  let fixture: ComponentFixture<PersonalContractPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalContractPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalContractPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
