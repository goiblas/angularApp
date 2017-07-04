import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
@Component({
  selector: 'goi-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.scss']
})
export class BooksComponent implements OnInit {
booksData: Array<Object> = [];
searchForm: FormGroup;

  constructor(
   private http: Http,
   private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  getResult() {

    if (this.searchForm.valid) {
    const querySearch = this.searchForm.get('query').value;

    this.getData(`https://www.googleapis.com/books/v1/volumes?q=${querySearch}`).subscribe(
       data => {
         console.log(data.items);
         this.booksData = data.items;
       }
      );
    }
  }

  buildForm() {
    this.searchForm = this.formBuilder.group({
      query: ['', Validators.required]
    })
  }

  getData(url: string) {
    return this.http.get(url).map( res => {
      return res.json();
    });
  }

  onSelect(e, id) {
    e.preventDefault();
    this.router.navigate(['/books', id]);
  }
}
