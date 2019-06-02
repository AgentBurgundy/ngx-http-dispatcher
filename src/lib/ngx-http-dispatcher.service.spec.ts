import { TestBed } from '@angular/core/testing';

import { NgxHttpDispatcherService } from './ngx-http-dispatcher.service';

describe('NgxHttpDispatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxHttpDispatcherService = TestBed.get(NgxHttpDispatcherService);
    expect(service).toBeTruthy();
  });
});
