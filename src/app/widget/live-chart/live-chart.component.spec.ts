import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveChartComponent } from './live-chart.component';

describe('LiveChartComponent', () => {
  let component: LiveChartComponent;
  let fixture: ComponentFixture<LiveChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
