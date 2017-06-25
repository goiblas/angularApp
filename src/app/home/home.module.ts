import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule} from 'ng2-charts';
import { WidgetModule } from './../widget/widget.module';

const routes: Routes = [
 {
   path: '',
   component: HomeComponent
 }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    WidgetModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
