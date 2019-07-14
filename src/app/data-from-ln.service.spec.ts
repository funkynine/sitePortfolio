import { TestBed } from '@angular/core/testing';

import { DataFromLnService } from './data-from-ln.service';

describe('DataFromLnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFromLnService = TestBed.get(DataFromLnService);
    expect(service).toBeTruthy();
  });
});
