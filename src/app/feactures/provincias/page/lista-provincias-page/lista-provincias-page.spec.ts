import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProvinciasPage } from './lista-provincias-page';

describe('ListaProvinciasPage', () => {
  let component: ListaProvinciasPage;
  let fixture: ComponentFixture<ListaProvinciasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProvinciasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProvinciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
