import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  books: any;
  book: any;
  constructor(private httpClient:HttpClient) { }
  getBooksByTitle(title:string){
    this.books = this.httpClient.get('http://openlibrary.org/search.json?title='+title);
    return this.books;
  }
  getBooksByAuthor(author:string){
    this.books =this.httpClient.get('http://openlibrary.org/search.json?author='+author);
    return this.books;
  }
  getBookDetails(id:number){
    this.books.subscribe(
      (data:any)=>{
      this.book = data.docs[id];
}
);
    return this.book;
  }
}
