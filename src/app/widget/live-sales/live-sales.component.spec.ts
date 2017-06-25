import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSalesComponent } from './live-sales.component';

describe('LiveSalesComponent', () => {
  let component: LiveSalesComponent;
  let fixture: ComponentFixture<LiveSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
