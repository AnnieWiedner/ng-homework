import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

class Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  front_cover_img: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newBook: Book = new Book();
  currentBook: Book = new Book();
  books: Book[] = [];
  baseApiUrl: string = 'http://localhost:9393/books';

  constructor(private http: Http) {
    this.getBooks();
  }

  getBooks() {
    this.http.get(this.baseApiUrl).subscribe(response =>
      this.books = response.json()
    )
  }

  postBook() {
    this.http.post(this.baseApiUrl, this.newBook).subscribe(response =>
      this.books.push(response.json())
    )
  }

  patchBook() {
    this.http.patch(this.baseApiUrl + this.currentBook.id, this.currentBook).subscribe(response =>
      this.books = response.json()
    )
  }

  destroyBook(book) {
    this.http.delete(this.baseApiUrl + book.id).subscribe(response =>
      this.books = response.json()
    )
  }

  editBook(book) {
    this.currentBook = Object.assign({}, book);
  }

  onSubmit() {
    console.log(this.newBook);
  }


}
