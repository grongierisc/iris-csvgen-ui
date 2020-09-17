import { TestBed } from '@angular/core/testing';

import { CsvgenService } from './csvgen.service';

describe('CsvgenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CsvgenService = TestBed.get(CsvgenService);
    expect(service).toBeTruthy();
  });
});
