import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionConfiguracionPage } from './administracion-configuracion-page';

describe('AdministracionConfiguracionPage', () => {
  let component: AdministracionConfiguracionPage;
  let fixture: ComponentFixture<AdministracionConfiguracionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministracionConfiguracionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministracionConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
