import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'goi-live-sales',
  template: `

  <div class="wrapItem">

   <div class="titleItem"> {{valueTitle}}
   <button md-icon-button (click)="increase()"><md-icon>autorenew</md-icon></button>
 </div>
  <div class="currentValue"> {{prettyNumber(valueCurrent)}} €</div>
  <div class="percent">
    <div>{{(percent)}} % del total objetivo {{valueCurrent$}} </div>
    <div>{{prettyNumber(valueWhole)}} €</div>
  </div>

  </div>
   <md-progress-bar
          color="primary"
          mode="determinate"
          [value]="percent"
          [bufferValue]="100">
      </md-progress-bar>

  `,
  styles: [`
    .currentValue {
      font-size: 30px;
      letter-spacing: -0.03em;
      font-weight: 300;
    }
    .percent {
      display:flex;
      justify-content: space-between;
      font-size: .8em;
      color: #666;
    }
    .wrapItem {
      padding:24px;
    }
    .titleItem button{
      float:right;

    }
    md-icon {
      font-size: 17px;
      color: #999;
    }
  `]
})

export class LiveSalesComponent implements OnInit {

percent: number;

@Input()
valueCurrent: number;
@Input()
valueWhole: number;
@Input()
valueTitle: string;

  constructor() { }

  ngOnInit() {
    this.getPercent();
  }

  prettyNumber(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  increase() {
    const randomNumber = Math.floor((Math.random() - Math.random()) * 5000);

    this.valueCurrent = Math.floor(this.valueCurrent) + randomNumber;
    this.getPercent();
  }

  getPercent() {
    this.percent = Math.floor( this.valueCurrent * 100 / this.valueWhole);
  }

}
