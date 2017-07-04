import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/auth.service';
import { MdList } from '@angular/material';



@Component({
  selector: 'goi-top-bar',
  template: `

<md-nav-list>
  <md-list-item>
     <a md-line [routerLink]="[ '' ]" class="link-nav">
        <md-icon>home</md-icon>
       Home</a>
  </md-list-item>
  <md-list-item>
     <a md-line [routerLink]="[ 'about' ]" class="link-nav">
        <md-icon>face</md-icon>
       About</a>
  </md-list-item>
  <md-list-item>
     <a md-line [routerLink]="[ 'cash' ]" class="link-nav">
        <md-icon>attach_money</md-icon>
       Cash</a>
  </md-list-item>
    <md-list-item>
     <a md-line [routerLink]="[ 'books' ]" class="link-nav">
        <md-icon>book</md-icon>
       Library</a>
  </md-list-item>
</md-nav-list>

  `,
  styles: [`
  .mat-icon {
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  .link-nav { color:#fff;  font-weight:300!important; }
`]
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
