import { TestBed } from '@angular/core/testing';

import { TestservicesService } from './testservices.service';

describe('TestservicesService', () => {
  let service: TestservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
