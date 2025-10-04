import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPuestosPage } from './lista-puestos-page';

describe('ListaPuestosPage', () => {
  let component: ListaPuestosPage;
  let fixture: ComponentFixture<ListaPuestosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPuestosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
