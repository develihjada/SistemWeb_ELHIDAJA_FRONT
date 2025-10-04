import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAlmacenesPage } from './registro-almacenes-page';

describe('RegistroAlmacenesPage', () => {
  let component: RegistroAlmacenesPage;
  let fixture: ComponentFixture<RegistroAlmacenesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroAlmacenesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroAlmacenesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
