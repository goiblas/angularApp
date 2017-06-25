import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NewsService {

news: FirebaseListObservable<any[]>;
lastNew: FirebaseListObservable<any[]>;
selectDate: Subject<any>;
arrayDate: string[];
currentNew: number;

  constructor( private db: AngularFireDatabase) {
    this.currentNew = 0;
    this.selectDate = new Subject();
    this.news = this.db.list('/news');
    this.getDates();
    this.lastNew = this.getLastNew();
  }

  getDates() {
   this.db.object('/news', {
     preserveSnapshot: true
   }).subscribe( data => {

    const arrayKeys = Object.keys(data.val());
    const arrayDate = [];

    for (let i = 0; i < arrayKeys.length; i++) {
      const date = data.val()[arrayKeys[i]].date;
      arrayDate.push(date);
    }

    this.arrayDate = arrayDate;
    this.selectDate.next(this.arrayDate[this.currentNew++]);
  })
}

  refresh() {
     if ( this.currentNew > this.arrayDate.length) {
      this.currentNew = 0;
     }
    const date = this.arrayDate[this.currentNew++];
    this.selectDate.next(date);
  }

  getLastNew() {
    return this.db.list('/news', {
      query: {
        orderByChild: 'date',
        equalTo: this.selectDate,
        limitToFirst: 1
      }
    });
  }

  getspecificNew(key) {
    return this.db.object(`/news/${key}`);
  }

  publicNew(objNew) {
    return this.db.list('/news').push(objNew);
  }

}
