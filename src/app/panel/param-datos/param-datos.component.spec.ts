import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamDatosComponent } from './param-datos.component';

describe('ParamDatosComponent', () => {
  let component: ParamDatosComponent;
  let fixture: ComponentFixture<ParamDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
