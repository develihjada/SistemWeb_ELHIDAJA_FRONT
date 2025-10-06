import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptoinsViews } from './optoins-views';

describe('OptoinsViews', () => {
  let component: OptoinsViews;
  let fixture: ComponentFixture<OptoinsViews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptoinsViews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptoinsViews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
