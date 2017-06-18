import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
 {
   path: '',
   component: AboutComponent
 }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule, // importar el nuevo contralador de forms
    RouterModule.forChild(routes)
  ],
  declarations: [AboutComponent, ContactComponent]
})
export class AboutModule { }
