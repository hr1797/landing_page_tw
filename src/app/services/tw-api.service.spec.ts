import { TestBed } from '@angular/core/testing';

import { TwApiService } from './tw-api.service';

describe('TwApiService', () => {
  let service: TwApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
