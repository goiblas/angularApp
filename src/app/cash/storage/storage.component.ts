import { Component, OnInit, Input } from '@angular/core';
import { Operation } from './../models/operation';

@Component({
  selector: 'goi-storage',
  template: `
  <h3>Cash Storage</h3>
    <ul>
      <li *ngFor="let item of storage"> <strong>  {{getDate(item.date)}}:</strong>
        <ul>
          <li> {{item.amount}} </li>
          <li class="descriptionText"> {{item.description}} </li>
        </ul>
      </li>
    </ul>
  `,
  styles: []
})

export class StorageComponent implements OnInit {
@Input()
storage: Operation[];

  constructor() { }

  ngOnInit() {
  }

  getDate(date: Date) {
   return date;
  }

}
