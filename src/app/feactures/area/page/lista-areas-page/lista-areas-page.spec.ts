import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAreasPage } from './lista-areas-page';

describe('ListaAreasPage', () => {
  let component: ListaAreasPage;
  let fixture: ComponentFixture<ListaAreasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAreasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
