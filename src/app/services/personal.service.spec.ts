import { TestBed, inject } from '@angular/core/testing';

import { PersonalService } from './personal.service';

describe('PersonalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalService]
    });
  });

  it('should be created', inject([PersonalService], (service: PersonalService) => {
    expect(service).toBeTruthy();
  }));
});
