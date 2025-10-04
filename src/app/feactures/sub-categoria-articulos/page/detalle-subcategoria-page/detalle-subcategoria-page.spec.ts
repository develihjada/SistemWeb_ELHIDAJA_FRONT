import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSubcategoriaPage } from './detalle-subcategoria-page';

describe('DetalleSubcategoriaPage', () => {
  let component: DetalleSubcategoriaPage;
  let fixture: ComponentFixture<DetalleSubcategoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleSubcategoriaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleSubcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
