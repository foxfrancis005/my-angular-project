/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidacionService } from './validacion.service';

describe('Service: Validacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidacionService]
    });
  });

  it('should ...', inject([ValidacionService], (service: ValidacionService) => {
    expect(service).toBeTruthy();
  }));
});
