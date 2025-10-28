import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroProductosPage } from './maestro-productos-page';

describe('MaestroProductosPage', () => {
  let component: MaestroProductosPage;
  let fixture: ComponentFixture<MaestroProductosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaestroProductosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaestroProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
