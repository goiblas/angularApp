import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'goi-color-card',
  template: `
  <div class="color-card" [ngStyle]="getBackground()">
  <div id="wrap-card">
  <div class="side front">
  <div #side class="content">
  <canvas baseChart
    [data]="doughnutChartData"
    [labels]="doughnutChartLabels"
    chartType="doughnut" ></canvas>
    </div>
    </div>
      <div class="side back">
      contenidos 2
      </div>
      </div>
    </div>
  `,
  styleUrls: ['./color-card.scss']
})
export class ColorCardComponent implements OnInit {
@Input()
bg: string;

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];

  constructor() { }

  ngOnInit() {
    setInterval(this.animate, 6000);
  }

  animate() {
    const wrap = document.getElementById('wrap-card');
    wrap.classList.add('up');
    wrap.addEventListener('transitionend', update, false);

    function update() {
          this.classList.remove('up');
          this.classList.toggle('state-1');
          this.removeEventListener('transitionend', update, false);
    }
  }

  getBackground() {
    return {'background-color': this.bg}
  }
}
