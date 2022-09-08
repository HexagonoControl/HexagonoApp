import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request5Component } from './request5.component';

describe('Request5Component', () => {
  let component: Request5Component;
  let fixture: ComponentFixture<Request5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
