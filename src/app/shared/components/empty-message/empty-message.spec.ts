import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyMessage } from './empty-message';

describe('EmptyMessage', () => {
  let component: EmptyMessage;
  let fixture: ComponentFixture<EmptyMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
