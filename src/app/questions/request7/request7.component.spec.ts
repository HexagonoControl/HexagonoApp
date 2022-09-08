import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Request7Component } from './request7.component';

describe('Request7Component', () => {
  let component: Request7Component;
  let fixture: ComponentFixture<Request7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Request7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Request7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
