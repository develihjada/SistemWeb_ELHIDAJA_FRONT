import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsViews } from './options-views';

describe('OptionsViews', () => {
  let component: OptionsViews;
  let fixture: ComponentFixture<OptionsViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsViews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
