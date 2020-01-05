import { TestBed, inject } from '@angular/core/testing';

import { morseService } from './morse.service';

describe('morseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [morseService]
    });
  });

  it('should be created', inject([morseService], (service: morseService) => {
    expect(service).toBeTruthy();
  }));
});
