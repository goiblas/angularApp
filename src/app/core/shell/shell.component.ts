import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goi-shell',
  template: `
    <div class="wrap">
      <goi-top-bar></goi-top-bar>
      <goi-main-content></goi-main-content>
    </div>
  `,
  styles: []
})
export class ShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
