import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiesgosTecnologicosComponent } from './riesgos-tecnologicos.component';

describe('RiesgosTecnologicosComponent', () => {
  let component: RiesgosTecnologicosComponent;
  let fixture: ComponentFixture<RiesgosTecnologicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiesgosTecnologicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiesgosTecnologicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
