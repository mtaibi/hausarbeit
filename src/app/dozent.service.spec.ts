import { TestBed } from '@angular/core/testing';

import { DozentService } from './dozent.service';

describe('DozentService', () => {
  let service: DozentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DozentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
