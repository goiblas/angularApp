import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goi-about',
  template: `
  <button (click)="contact= false">Sobre mi</button>
  <button (click)="contact= true">Contacto</button>
  <div *ngIf="contact; then contactTemplate; else aboutTemplate"> </div>
  <ng-template #aboutTemplate>
  Sobre mi
  </ng-template>
  <ng-template #contactTemplate>
     <goi-contact></goi-contact>
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
