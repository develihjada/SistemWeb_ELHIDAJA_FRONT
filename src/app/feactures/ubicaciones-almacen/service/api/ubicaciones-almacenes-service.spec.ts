import { TestBed } from '@angular/core/testing';

import { UbicacionesAlmacenesService } from './ubicaciones-almacenes-service';

describe('UbicacionesAlmacenesService', () => {
  let service: UbicacionesAlmacenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UbicacionesAlmacenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
