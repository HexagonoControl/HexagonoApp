import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request2Component } from './request2.component';

describe('Request2Component', () => {
  let component: Request2Component;
  let fixture: ComponentFixture<Request2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
