import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizeComponent } from './fontsize.component';

describe('FontsizeComponent', () => {
  let component: FontsizeComponent;
  let fixture: ComponentFixture<FontsizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
