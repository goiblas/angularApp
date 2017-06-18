import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { InputComponent } from './../shared/input/input.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

// configuración del componente igual que el módulo
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent, ContactComponent, InputComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // my testing
  it('should show contact form when user click the button', () => {
    const emailButton = fixture.debugElement.query(By.css('button[name="contact-with-me"]'));
    emailButton.nativeElement.click();

    fixture.detectChanges();

    const contactForm = fixture.debugElement.query(By.css('goi-contact')); ;
    expect(contactForm).toBeTruthy();
  });

});
