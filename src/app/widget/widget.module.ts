import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveSalesComponent } from './live-sales/live-sales.component';
import { MdProgressBarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news/news.service';
import { AuthService } from './../shared/auth.service';


@NgModule({
  imports: [
    CommonModule,
    MdProgressBarModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [LiveSalesComponent, NewsComponent],
  exports: [
    LiveSalesComponent,
    NewsComponent
  ],
  providers: [ NewsService, AuthService ]
})
export class WidgetModule { }
