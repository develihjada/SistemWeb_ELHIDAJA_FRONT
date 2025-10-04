import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProvinciasPage } from './registro-provincias-page';

describe('RegistroProvinciasPage', () => {
  let component: RegistroProvinciasPage;
  let fixture: ComponentFixture<RegistroProvinciasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProvinciasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProvinciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
