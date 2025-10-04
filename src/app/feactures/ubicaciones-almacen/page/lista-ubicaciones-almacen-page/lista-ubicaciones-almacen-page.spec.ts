import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUbicacionesAlmacenPage } from './lista-ubicaciones-almacen-page';

describe('ListaUbicacionesAlmacenPage', () => {
  let component: ListaUbicacionesAlmacenPage;
  let fixture: ComponentFixture<ListaUbicacionesAlmacenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUbicacionesAlmacenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUbicacionesAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
