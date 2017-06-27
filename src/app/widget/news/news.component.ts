import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { AuthService } from 'app/shared/auth.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'goi-news',
  template: `
    <div *ngFor="let itemNew of currentNew | async"  class="card-news">

    <div class="bg"> <img [src]="itemNew.photo"></div>
    <div class="content">
    <div class="header-buttons">
     <button md-icon-button (click)="refresh(itemNew.$key)"><md-icon>autorenew</md-icon></button>
     </div>
     <div class="notice">
       <h1>{{itemNew.title}}</h1>
        {{itemNew.date}}
       <p> {{itemNew.description}}<p>
      </div>
      </div>

    </div>
  `,
  styleUrls: ['./news.scss']
})

export class NewsComponent implements OnInit {
  currentNew: FirebaseListObservable<any[]>;

  constructor( private newsService: NewsService) {
  }

  ngOnInit() {
    this.currentNew = this.newsService.getLastNew();

    const myNew = {
      title: 'The Incredible Italian Island You\'ve Never Heard Of',
      description: 'Plan a visit to Ischia, but don\'t let the secret out',
      date: Date.now(),
      // tslint:disable-next-line:max-line-length
      photo: 'http://www.nationalgeographic.com/content/dam/travel/2017-digital/ischia-italy/boats-sant-angelo-ischia-italy.adapt.1900.1.jpg'
    }

  }

  refresh() {
    this.newsService.refresh();
  }
}
