import { TestBed } from '@angular/core/testing';

import { BroService } from './bro.service';

describe('BroService', () => {
  let service: BroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
