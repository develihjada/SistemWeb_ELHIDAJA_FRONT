import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDepartamentoPage } from './detalle-departamento-page';

describe('DetalleDepartamentoPage', () => {
  let component: DetalleDepartamentoPage;
  let fixture: ComponentFixture<DetalleDepartamentoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDepartamentoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDepartamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
