import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goi-about',
  template: `
  <button (click)="contact= false" name="about-me">Sobre mi</button>
  <button (click)="contact= true" name="contact-with-me">Contacto</button>
  <div *ngIf="contact; then contactTemplate; else aboutTemplate"> </div>
  <ng-template #aboutTemplate>
  Sobre mi
  </ng-template>
  <ng-template #contactTemplate>
     <goi-contact class="contactForm"></goi-contact>
  </ng-template>

  `,
  styles: []
})
export class AboutComponent implements OnInit {
  contact = false;
  constructor() { }

  ngOnInit() {
  }

}
