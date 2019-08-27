import { TestBed } from '@angular/core/testing';

import { FlagLoginService } from './flag-login.service';

describe('FlagLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlagLoginService = TestBed.get(FlagLoginService);
    expect(service).toBeTruthy();
  });
});
