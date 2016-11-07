/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroCollectorService } from './hero-collector.service';

describe('Service: HeroCollector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroCollectorService]
    });
  });

  it('should ...', inject([HeroCollectorService], (service: HeroCollectorService) => {
    expect(service).toBeTruthy();
  }));
});
