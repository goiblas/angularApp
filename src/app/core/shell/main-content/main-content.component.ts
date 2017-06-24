import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';


@Component({
  selector: 'goi-main-content',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
