import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUbicacionesAlmacenPage } from './registro-ubicaciones-almacen-page';

describe('RegistroUbicacionesAlmacenPage', () => {
  let component: RegistroUbicacionesAlmacenPage;
  let fixture: ComponentFixture<RegistroUbicacionesAlmacenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUbicacionesAlmacenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUbicacionesAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
