import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page002Component } from './page002.component';

describe('Page002Component', () => {
  let component: Page002Component;
  let fixture: ComponentFixture<Page002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
