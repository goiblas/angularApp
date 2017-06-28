import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goi-live-chart',
  template: `
  <div>
<canvas baseChart
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"></canvas>
  </div>
        <md-slide-toggle
          [color]="primary"
          (change)="changeState()"
          [checked]="chartlive">
        Gráfica activa
      </md-slide-toggle>

  `,
  styles: []
})
export class LiveChartComponent implements OnInit {
  chartlive = false;
  velocity = 2800;
  launcherUpdate: any;
  private allMouth: Array<string> = ['January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  private lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Apple'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Google'}
  ];
  private lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  private lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    this.changeState();
  }
changeState(){
  this.chartlive = !this.chartlive
  if ( this.chartlive){
    this.updateChart();
    this.launcherUpdate = setInterval(this.updateChart.bind(this), this.velocity);
  }else {
    clearInterval(this.launcherUpdate);
  }
}

updateChart() {

    this.updateChartData()
    this.updateMonth();

}

updateChartData() {
const _tmpData = this.lineChartData.slice(0);

for (let i = 0; i < _tmpData.length; i++) {

  const random = Math.floor(Math.random() * 100) + 1;
  _tmpData[i].data.shift();
  _tmpData[i].data.push(random);
}

this.lineChartData = _tmpData;

}
updateMonth() {
  const NextMonth = this.getNextMonth();
  this.lineChartLabels.shift();
  this.lineChartLabels.push(NextMonth);
}


getNextMonth() {
    const _lastMonth = this.lineChartLabels[this.lineChartLabels.length - 1];
    let _numberNextMonth = 0;

    const positionMonth = this.allMouth.indexOf(_lastMonth);

    if (positionMonth < this.allMouth.length - 1) {
        _numberNextMonth = positionMonth + 1;
    }

    return this.allMouth[_numberNextMonth];
  }

}
