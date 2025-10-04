import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlmacenesPage } from './detalle-almacenes-page';

describe('DetalleAlmacenesPage', () => {
  let component: DetalleAlmacenesPage;
  let fixture: ComponentFixture<DetalleAlmacenesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAlmacenesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAlmacenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
