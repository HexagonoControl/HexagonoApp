import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticoGeneralComponent } from './diagnostico-general.component';

describe('DiagnosticoGeneralComponent', () => {
  let component: DiagnosticoGeneralComponent;
  let fixture: ComponentFixture<DiagnosticoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticoGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
