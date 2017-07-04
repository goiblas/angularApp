import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { Routes, RouterModule } from '@angular/router/';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { AuthService } from './../shared/auth.service';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
 {
   path: '',
   component: BooksComponent
 },
 {
   path: ':id',
   component: BookdetailsComponent
 }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpModule,
    SharedModule,
    ReactiveFormsModule // importar el nuevo contralador de forms

  ],
  providers: [AuthService],
  declarations: [BooksComponent, BookdetailsComponent],
  exports: [BooksComponent, BookdetailsComponent]
})
export class BooksModule { }
