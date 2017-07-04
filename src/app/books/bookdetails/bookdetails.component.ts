import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Http } from '@angular/http';


import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthService } from './../../shared/auth.service';
import { FontsizeComponent } from './../../shared/fontsize/fontsize.component';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'goi-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.scss']
})
export class BookdetailsComponent implements OnInit {
size = 16;
user: any;
book: any;
isFavourite: false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http,
    private auth: AuthService,
    private af: AngularFireDatabase
  ) {
    this.user = this.auth.user;
  }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) =>
    params.getAll('id')).subscribe(id =>
     this.getDetailsBooks(id)
    );
  }

  checkFavourite() {
    this.af.object('usuarios/' + this.user.uid + '/favoritos/' + this.book.id).subscribe(
      book => {
        this.isFavourite = book.$exists();
      }
    );
  }
  getDetailsBooks(id: string) {
    this.http.get(`https://www.googleapis.com/books/v1/volumes/${id}`).subscribe( res => {
     this.book = res.json();
     this.checkFavourite();
    }
     );
  }

  addFavourites() {

    const saveBook = {
      'title': this.book.volumeInfo.title ||  'Desconocido',
      'date': Date.now()
    }
    const ref = this.af.object('usuarios/' + this.user.uid + '/favoritos/' + this.book.id);
    ref.set(saveBook);
  }

  removeFavourites() {
    const ref = this.af.object('usuarios/' + this.user.uid + '/favoritos/' + this.book.id);
    ref.remove();
  }

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

    resize(delta: number) {
      this.size += delta;
    }
}
