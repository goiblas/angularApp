import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../shared/auth.service';


@Component({
  selector: 'goi-top-bar',
  template: `
    <nav>
      <a [routerLink]="[ '' ]" class="button button-clear">Home</a>
      <a [routerLink]="[ 'about' ]" class="button button-clear">About</a>
      <a [routerLink]="[ 'cash' ]" class="button button-clear">Cash</a>
    </nav>
  `,
  styles: []
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



}
