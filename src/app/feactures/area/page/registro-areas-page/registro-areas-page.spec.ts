import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAreasPage } from './registro-areas-page';

describe('RegistroAreasPage', () => {
  let component: RegistroAreasPage;
  let fixture: ComponentFixture<RegistroAreasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAreasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAreasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
