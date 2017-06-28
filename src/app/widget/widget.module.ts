import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSalesComponent } from './live-sales/live-sales.component';
import { MdProgressBarModule, MdButtonModule, MdIconModule, MdSlideToggleModule, MdSliderModule } from '@angular/material';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { AuthService } from './../shared/auth.service';
import { ColorCardComponent } from './color-card/color-card.component';
import { ChartsModule } from 'ng2-charts';
import { LiveChartComponent } from './live-chart/live-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule,
    MdButtonModule,
    MdIconModule,
    MdSlideToggleModule,
    MdSliderModule,
    ChartsModule
  ],
  declarations: [LiveSalesComponent, NewsComponent, ColorCardComponent, LiveChartComponent],
  exports: [
    LiveSalesComponent,
    NewsComponent,
    ColorCardComponent,
    LiveChartComponent
  ],
  providers: [ NewsService, AuthService ]
})

export class WidgetModule { }