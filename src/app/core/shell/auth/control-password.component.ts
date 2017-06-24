import { Component, OnInit, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'goi-control-password',
  template: `
    <md-progress-bar
          class="bar"
          [color]="color"
          [mode]="mode"
          [value]="value"
          [bufferValue]="bufferValue">
      </md-progress-bar>
    <div class="showMsg">{{msg}}</div>
  `,
  styles: [`
  md-progress-bar{
    background:grey;
  }
  .showMsg {
    font-size: .82em;
    line-height: 30px;
    min-height: 30px;
    margin-bottom:12px;
  }
  `]
})

export class ControlPasswordComponent implements OnInit {
@Input() cvalue: string;

private _msg = '';

@Input()
set msg(msg: string){
  this._msg = msg !== 'required' ? msg : '';
};

get msg(): string { return this._msg };

color = 'primary';
mode = 'determinate';
value = 0;
bufferValue = 100;

  constructor( ) { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    const num = this.cvalue.length;
    if (num < 5) {
      this.value = num * 10;
    }else {
      this.value = 60;
    }

    if (/([a-z][A-Z])/g.test(this.cvalue)) {
      this.value += 10;
    }
    if (/\d/g.test(this.cvalue)) {
      this.value += 20;
    }
    if (/[$@$!%*?&]/g.test(this.cvalue)) {
      this.value += 10;
    }
    if (this.value > 0) {
      this.color = 'warn';
    }
    if (this.value > 40) {
      this.color = 'accent';
    }
    if (this.value > 60) {
      this.color = 'primary';
    }
  }

}
