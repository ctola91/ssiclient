import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFunctionsComponent } from './create-functions.component';

describe('CreateFunctionsComponent', () => {
  let component: CreateFunctionsComponent;
  let fixture: ComponentFixture<CreateFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
