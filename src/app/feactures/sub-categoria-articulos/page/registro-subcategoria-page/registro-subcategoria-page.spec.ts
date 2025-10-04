import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSubcategoriaPage } from './registro-subcategoria-page';

describe('RegistroSubcategoriaPage', () => {
  let component: RegistroSubcategoriaPage;
  let fixture: ComponentFixture<RegistroSubcategoriaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroSubcategoriaPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroSubcategoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
