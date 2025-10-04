import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCategoriasPage } from './lista-categorias-page';

describe('ListaCategoriasPage', () => {
  let component: ListaCategoriasPage;
  let fixture: ComponentFixture<ListaCategoriasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCategoriasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCategoriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
