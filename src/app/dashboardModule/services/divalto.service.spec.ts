import { TestBed } from '@angular/core/testing';

import { DivaltoService } from './divalto.service';

describe('DivaltoService', () => {
  let service: DivaltoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivaltoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
