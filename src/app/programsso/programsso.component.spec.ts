import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramssoComponent } from './programsso.component';

describe('ProgramssoComponent', () => {
  let component: ProgramssoComponent;
  let fixture: ComponentFixture<ProgramssoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramssoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
