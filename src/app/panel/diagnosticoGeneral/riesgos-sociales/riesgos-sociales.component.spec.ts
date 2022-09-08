import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosSocialesComponent } from './riesgos-sociales.component';

describe('RiesgosSocialesComponent', () => {
  let component: RiesgosSocialesComponent;
  let fixture: ComponentFixture<RiesgosSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgosSocialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiesgosSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
