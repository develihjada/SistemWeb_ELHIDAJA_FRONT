import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaAlmacenPage } from './logistica-almacen-page';

describe('LogisticaAlmacenPage', () => {
  let component: LogisticaAlmacenPage;
  let fixture: ComponentFixture<LogisticaAlmacenPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogisticaAlmacenPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticaAlmacenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
