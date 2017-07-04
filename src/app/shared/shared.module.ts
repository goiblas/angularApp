import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { AuthService } from './auth.service';
import { FontsizeComponent } from './fontsize/fontsize.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [InputComponent, FontsizeComponent],
  providers: [AuthService],
  exports: [
    InputComponent,
    FontsizeComponent
  ]
})
export class SharedModule { }
