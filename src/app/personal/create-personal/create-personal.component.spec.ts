import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalComponent } from './create-personal.component';

describe('CreatePersonalComponent', () => {
  let component: CreatePersonalComponent;
  let fixture: ComponentFixture<CreatePersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
