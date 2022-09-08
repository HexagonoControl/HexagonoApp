import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request3Component } from './request3.component';

describe('Request3Component', () => {
  let component: Request3Component;
  let fixture: ComponentFixture<Request3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
