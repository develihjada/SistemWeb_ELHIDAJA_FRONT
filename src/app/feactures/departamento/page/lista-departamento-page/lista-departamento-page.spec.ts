import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDepartamentoPage } from './lista-departamento-page';

describe('ListaDepartamentoPage', () => {
  let component: ListaDepartamentoPage;
  let fixture: ComponentFixture<ListaDepartamentoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDepartamentoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDepartamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
