import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlContableComponent } from './control-contable.component';

describe('ControlContableComponent', () => {
  let component: ControlContableComponent;
  let fixture: ComponentFixture<ControlContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlContableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
