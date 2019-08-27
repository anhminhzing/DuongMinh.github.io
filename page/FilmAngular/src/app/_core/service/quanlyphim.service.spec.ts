import { TestBed } from '@angular/core/testing';

import { QuanlyphimService } from './quanlyphim.service';

describe('QuanlyphimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuanlyphimService = TestBed.get(QuanlyphimService);
    expect(service).toBeTruthy();
  });
});
