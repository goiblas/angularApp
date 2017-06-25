import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { TopBarComponent } from './shell/top-bar/top-bar.component';

import { MainContentComponent } from './shell/main-content/main-content.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { AuthModule } from './shell/auth/auth.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../../environments/environment';

// material
import {
   MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
   MdInputModule, MdTabsModule, MdProgressBarModule, MdSidenavModule, MdListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '',
    loadChildren: './../home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './../about/about.module#AboutModule'
  },
  {
    path: 'cash',
    loadChildren: './../cash/cash.module#CashModule'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdTabsModule,
    MdProgressBarModule,
    SharedModule,
    MdSidenavModule,
    MdListModule,
    AuthModule
  ],
  declarations: [ShellComponent, TopBarComponent, MainContentComponent ],
  exports: [
    ShellComponent
  ]
})
export class CoreModule { }
