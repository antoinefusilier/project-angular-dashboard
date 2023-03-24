import { TestBed } from '@angular/core/testing';

import { ApiCheckInterceptor } from './api-check.interceptor';

describe('ApiCheckInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiCheckInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiCheckInterceptor = TestBed.inject(ApiCheckInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
