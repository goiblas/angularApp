import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { MdMenuModule, MdMenu, MdButton, MdIcon } from '@angular/material';

@Component({
  selector: 'goi-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.scss']
})
export class ShellComponent implements OnInit {

  user: any;
  stateSide = true;
  modeSide = 'side';

  constructor( private authService: AuthService) {
    this.user = this.authService.user;
  }

  ngOnInit() {
    this.updateSide();
  }

  @HostListener('window:resize')
  updateSide(){
    if( window.innerWidth < 960){
      this.stateSide = false;
      this.modeSide = 'over';
    }else{
      this.stateSide = true;
      this.modeSide = 'side';
    }
  }

  logout(e) {
    e.preventDefault();
    this.authService.logout();
  }
}
