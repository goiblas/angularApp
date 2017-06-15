import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
 {
   path: '',
   component: CashComponent
 }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CashComponent]
})
export class CashModule { }
