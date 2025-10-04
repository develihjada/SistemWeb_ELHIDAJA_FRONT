import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDepartamentoPage } from './registro-departamento-page';

describe('RegistroDepartamentoPage', () => {
  let component: RegistroDepartamentoPage;
  let fixture: ComponentFixture<RegistroDepartamentoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDepartamentoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDepartamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
