import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from '../models/book.model'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

    constructor(private http:HttpClient) {}

    getBooksByTitle(title:string) {
    let url ='';
    url='http://openlibrary.org/search.json?title='+title;
    return this.http.get(url);
      }
      getBooksByAuthor(author:string) {
      let url ='';
      url='http://openlibrary.org/search.json?author='+author;
      return this.http.get(url);
        }
      getBookDetails(isbn:string){
        let url ='';
        url=' http://openlibrary.org/api/volumes/brief/isbn/'+ isbn+'.json';
        return this.http.get(url);
      }
      getBookCover(isbn:string, size:string){
        return 'http://covers.openlibrary.org/b/isbn/'+isbn+'-'+size+'.jpg';
      }
}
