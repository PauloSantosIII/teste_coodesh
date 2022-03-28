/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuscaApiService } from './busca-api.service';

describe('Service: BuscaApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaApiService]
    });
  });

  it('should ...', inject([BuscaApiService], (service: BuscaApiService) => {
    expect(service).toBeTruthy();
  }));
});
