import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUbicacionesAlmacenPage } from './detalle-ubicaciones-almacen-page';

describe('DetalleUbicacionesAlmacenPage', () => {
  let component: DetalleUbicacionesAlmacenPage;
  let fixture: ComponentFixture<DetalleUbicacionesAlmacenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleUbicacionesAlmacenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUbicacionesAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
