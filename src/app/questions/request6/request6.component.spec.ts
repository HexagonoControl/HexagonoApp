import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request6Component } from './request6.component';

describe('Request6Component', () => {
  let component: Request6Component;
  let fixture: ComponentFixture<Request6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
