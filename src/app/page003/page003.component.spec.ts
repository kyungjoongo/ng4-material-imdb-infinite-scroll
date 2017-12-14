import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page003Component } from './page003.component';

describe('Page003Component', () => {
  let component: Page003Component;
  let fixture: ComponentFixture<Page003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
