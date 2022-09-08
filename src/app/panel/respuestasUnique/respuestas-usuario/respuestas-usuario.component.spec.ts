import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasUsuarioComponent } from './respuestas-usuario.component';

describe('RespuestasUsuarioComponent', () => {
  let component: RespuestasUsuarioComponent;
  let fixture: ComponentFixture<RespuestasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
