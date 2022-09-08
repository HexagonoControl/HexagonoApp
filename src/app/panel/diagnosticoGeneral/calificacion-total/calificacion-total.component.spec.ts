import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionTotalComponent } from './calificacion-total.component';

describe('CalificacionTotalComponent', () => {
  let component: CalificacionTotalComponent;
  let fixture: ComponentFixture<CalificacionTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalificacionTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
