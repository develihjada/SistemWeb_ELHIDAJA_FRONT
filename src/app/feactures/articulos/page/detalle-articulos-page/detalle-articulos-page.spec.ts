import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleArticulosPage } from './detalle-articulos-page';

describe('DetalleArticulosPage', () => {
  let component: DetalleArticulosPage;
  let fixture: ComponentFixture<DetalleArticulosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleArticulosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleArticulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
