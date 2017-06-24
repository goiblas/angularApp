import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../../../shared/auth.service';
import { MdInputModule, MdButtonModule, MdTabsModule } from '@angular/material';
import { ControlPasswordComponent } from './control-password.component';
import { MdProgressBarModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdInputModule,
    MdTabsModule,
    MdButtonModule,
    MdProgressBarModule
  ],
  declarations: [AuthComponent, ControlPasswordComponent],
  providers: [ AuthService],
  exports: [AuthComponent]

})
export class AuthModule { }
