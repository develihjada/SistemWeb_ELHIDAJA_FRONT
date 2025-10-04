import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProvinciasPage } from './detalle-provincias-page';

describe('DetalleProvinciasPage', () => {
  let component: DetalleProvinciasPage;
  let fixture: ComponentFixture<DetalleProvinciasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProvinciasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProvinciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
