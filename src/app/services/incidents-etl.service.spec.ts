import { TestBed, inject } from '@angular/core/testing';

import { IncidentsEtlService } from './incidents-etl.service';

describe('IncidentsEtlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IncidentsEtlService]
    });
  });

  it('should be created', inject([IncidentsEtlService], (service: IncidentsEtlService) => {
    expect(service).toBeTruthy();
  }));
});
