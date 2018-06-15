import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

    id: number;
    private sub: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
        console.log(this.id);
         // In a real app: dispatch action to load the details here.
      });
    }

}
