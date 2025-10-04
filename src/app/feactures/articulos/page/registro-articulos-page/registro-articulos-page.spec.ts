import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroArticulosPage } from './registro-articulos-page';

describe('RegistroArticulosPage', () => {
  let component: RegistroArticulosPage;
  let fixture: ComponentFixture<RegistroArticulosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroArticulosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroArticulosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
