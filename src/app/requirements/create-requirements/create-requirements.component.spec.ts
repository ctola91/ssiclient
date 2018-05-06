import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequirementsComponent } from './create-requirements.component';

describe('CreateFunctionsComponent', () => {
  let component: CreateRequirementsComponent;
  let fixture: ComponentFixture<CreateRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
