import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'goi-home',
  template: `
    <p>
      home Works!
    </p>
  <div>

   </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  public chartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public chartLabels;
  public chartData: any[] = [];

  constructor() { }

  ngOnInit() {
    this.chartLabels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul'];
    this.chartData = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Expense' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Income' }
    ];
  }

}
