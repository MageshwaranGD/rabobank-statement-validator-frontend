import { TestBed } from '@angular/core/testing';

import { RaboStatementService } from './rabo-statement.service';

describe('RaboStatementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaboStatementService = TestBed.get(RaboStatementService);
    expect(service).toBeTruthy();
  });
});
