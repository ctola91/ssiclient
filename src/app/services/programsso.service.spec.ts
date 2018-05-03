import { TestBed, inject } from '@angular/core/testing';

import { ProgramssoService } from './programsso.service';

describe('ProgramssoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramssoService]
    });
  });

  it('should be created', inject([ProgramssoService], (service: ProgramssoService) => {
    expect(service).toBeTruthy();
  }));
});
