import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateKardexComponent } from './crate-kardex.component';

describe('CrateKardexComponent', () => {
  let component: CrateKardexComponent;
  let fixture: ComponentFixture<CrateKardexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrateKardexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
