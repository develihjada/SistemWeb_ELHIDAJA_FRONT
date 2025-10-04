import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProveedorPage } from './detalle-proveedor-page';

describe('DetalleProveedorPage', () => {
  let component: DetalleProveedorPage;
  let fixture: ComponentFixture<DetalleProveedorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProveedorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
