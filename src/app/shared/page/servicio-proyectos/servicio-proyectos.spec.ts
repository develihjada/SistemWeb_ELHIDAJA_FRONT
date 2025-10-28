import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioProyectos } from './servicio-proyectos';

describe('ServicioProyectos', () => {
  let component: ServicioProyectos;
  let fixture: ComponentFixture<ServicioProyectos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioProyectos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicioProyectos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
