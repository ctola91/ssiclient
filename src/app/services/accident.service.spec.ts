import { TestBed, inject } from '@angular/core/testing';

import { AccidentService } from './accident.service';

describe('AccidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentService]
    });
  });

  it('should be created', inject([AccidentService], (service: AccidentService) => {
    expect(service).toBeTruthy();
  }));
});
