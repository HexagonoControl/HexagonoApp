import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosAmbientalesComponent } from './riesgos-ambientales.component';

describe('RiesgosAmbientalesComponent', () => {
  let component: RiesgosAmbientalesComponent;
  let fixture: ComponentFixture<RiesgosAmbientalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgosAmbientalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiesgosAmbientalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
