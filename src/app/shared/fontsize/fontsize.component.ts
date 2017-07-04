import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'goi-fontsize',
  template: `
    <button (click)="resizeFont(-2)" title="smaller">A-</button>
    <button (click)="resizeFont(+2)" title="bigger">A+</button>
  `,
  styles: [
   ` button {
      border:0;
      padding:4px 12px;
      background-color:#fff;
  }
  `
  ]
})
export class FontsizeComponent implements OnInit {

@Input() size: number;
@Output() sizeChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  resizeFont(delta: number) {
    this.size = Math.min(26, Math.max(10, this.size + delta));
    this.sizeChange.emit(this.size);

  }
}
