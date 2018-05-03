import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgramssoComponent } from './create-programsso.component';

describe('CreateProgramssoComponent', () => {
  let component: CreateProgramssoComponent;
  let fixture: ComponentFixture<CreateProgramssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProgramssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgramssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
