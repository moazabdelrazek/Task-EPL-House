import { TestBed } from '@angular/core/testing';

import { MainServicesApiService } from './main-services-api.service';

describe('MainServicesApiService', () => {
  let service: MainServicesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainServicesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
