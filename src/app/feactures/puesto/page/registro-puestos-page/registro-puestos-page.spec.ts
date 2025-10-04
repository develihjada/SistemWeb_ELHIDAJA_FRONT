import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPuestosPage } from './registro-puestos-page';

describe('RegistroPuestosPage', () => {
  let component: RegistroPuestosPage;
  let fixture: ComponentFixture<RegistroPuestosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPuestosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPuestosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
