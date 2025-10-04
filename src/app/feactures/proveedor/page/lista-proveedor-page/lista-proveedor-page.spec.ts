import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProveedorPage } from './lista-proveedor-page';

describe('ListaProveedorPage', () => {
  let component: ListaProveedorPage;
  let fixture: ComponentFixture<ListaProveedorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProveedorPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
