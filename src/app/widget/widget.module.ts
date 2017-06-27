import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSalesComponent } from './live-sales/live-sales.component';
import { MdProgressBarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { AuthService } from './../shared/auth.service';
import { ColorCardComponent } from './color-card/color-card.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule,
    MdButtonModule,
    MdIconModule,
    ChartsModule
  ],
  declarations: [LiveSalesComponent, NewsComponent, ColorCardComponent],
  exports: [
    LiveSalesComponent,
    NewsComponent,
    ColorCardComponent
  ],
  providers: [ NewsService, AuthService ]
})

export class WidgetModule { }