import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlOperacionalComponent } from './control-operacional.component';

describe('ControlOperacionalComponent', () => {
  let component: ControlOperacionalComponent;
  let fixture: ComponentFixture<ControlOperacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlOperacionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlOperacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
