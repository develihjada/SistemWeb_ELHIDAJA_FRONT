import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePuestosPage } from './detalle-puestos-page';

describe('DetallePuestosPage', () => {
  let component: DetallePuestosPage;
  let fixture: ComponentFixture<DetallePuestosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePuestosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
