import { TestBed } from '@angular/core/testing';

import { Serivedashboard } from './serivedashboard';

describe('Serivedashboard', () => {
  let service: Serivedashboard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serivedashboard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
