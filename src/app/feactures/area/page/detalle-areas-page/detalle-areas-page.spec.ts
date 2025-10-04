import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAreasPage } from './detalle-areas-page';

describe('DetalleAreasPage', () => {
  let component: DetalleAreasPage;
  let fixture: ComponentFixture<DetalleAreasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleAreasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
