import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request4Component } from './request4.component';

describe('Request4Component', () => {
  let component: Request4Component;
  let fixture: ComponentFixture<Request4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
