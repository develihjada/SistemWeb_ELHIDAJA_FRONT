import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDistritosPage } from './detalle-distritos-page';

describe('DetalleDistritosPage', () => {
  let component: DetalleDistritosPage;
  let fixture: ComponentFixture<DetalleDistritosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDistritosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDistritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
