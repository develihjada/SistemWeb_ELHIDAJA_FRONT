import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlmacenesPage } from './lista-almacenes-page';

describe('ListaAlmacenesPage', () => {
  let component: ListaAlmacenesPage;
  let fixture: ComponentFixture<ListaAlmacenesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAlmacenesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlmacenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
