import { TestBed } from '@angular/core/testing';

import { PlanStudiowService } from './plan-studiow-service.service';

describe('PlanStudiowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanStudiowService = TestBed.get(PlanStudiowService);
    expect(service).toBeTruthy();
  });
});
