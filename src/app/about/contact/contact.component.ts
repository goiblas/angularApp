import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from './../../shared/input/input.component';

@Component({
  selector: 'goi-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.formBuilder.group({
      sender: ['Jesús', Validators.required],
      subject: ['', Validators.required],
      body: ['']
    });
  }

    showError(fieldName: string) {
      const ncontrol = this.contactForm.get(fieldName);
      return (ncontrol.touched || ncontrol.dirty ) && !ncontrol.valid;
    }

    sendForm(){
      console.log(this.contactForm)
    }
}
