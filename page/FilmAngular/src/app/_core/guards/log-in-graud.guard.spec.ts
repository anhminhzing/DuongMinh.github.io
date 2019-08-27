import { TestBed, async, inject } from '@angular/core/testing';

import { LogInGraudGuard } from './log-in-graud.guard';

describe('LogInGraudGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInGraudGuard]
    });
  });

  it('should ...', inject([LogInGraudGuard], (guard: LogInGraudGuard) => {
    expect(guard).toBeTruthy();
  }));
});
