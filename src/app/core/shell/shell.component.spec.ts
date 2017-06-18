import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';

import { ShellComponent } from './shell.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ ShellComponent , TopBarComponent, MainContentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
