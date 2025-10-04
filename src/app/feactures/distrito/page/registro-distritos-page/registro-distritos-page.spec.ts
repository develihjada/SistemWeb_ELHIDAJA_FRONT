import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDistritosPage } from './registro-distritos-page';

describe('RegistroDistritosPage', () => {
  let component: RegistroDistritosPage;
  let fixture: ComponentFixture<RegistroDistritosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDistritosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDistritosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
