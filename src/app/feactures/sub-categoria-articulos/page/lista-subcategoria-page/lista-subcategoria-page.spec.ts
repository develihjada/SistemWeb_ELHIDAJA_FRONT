import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSubcategoriaPage } from './lista-subcategoria-page';

describe('ListaSubcategoriaPage', () => {
  let component: ListaSubcategoriaPage;
  let fixture: ComponentFixture<ListaSubcategoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaSubcategoriaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSubcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
