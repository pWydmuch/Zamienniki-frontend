import { TestBed } from '@angular/core/testing';

import { PodanieService } from './podanie.service';

describe('PodanieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PodanieService = TestBed.get(PodanieService);
    expect(service).toBeTruthy();
  });
});
