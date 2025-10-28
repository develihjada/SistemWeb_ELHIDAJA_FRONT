import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesAnaliticasPage } from './reportes-analiticas-page';

describe('ReportesAnaliticasPage', () => {
  let component: ReportesAnaliticasPage;
  let fixture: ComponentFixture<ReportesAnaliticasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesAnaliticasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesAnaliticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
