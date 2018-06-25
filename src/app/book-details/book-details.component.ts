import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  data:any;
  bookTitle:string;
  coverSourceUrl:string;
  isbn: any;
  isLoading : boolean;
  constructor(private _bookService: DemoService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.isbn = this.route.snapshot.params['isbn'];
    this.coverSourceUrl=this._bookService.getBookCover(this.isbn,'L');
    this.isLoading = true;
    this._bookService.getBookDetails(this.isbn).subscribe(
        (data:any)=>{
          console.log(data);
          error => {
            alert('error has occured');
          }
  });

}
}
