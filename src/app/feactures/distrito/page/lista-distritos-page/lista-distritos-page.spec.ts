import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDistritosPage } from './lista-distritos-page';

describe('ListaDistritosPage', () => {
  let component: ListaDistritosPage;
  let fixture: ComponentFixture<ListaDistritosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDistritosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDistritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
