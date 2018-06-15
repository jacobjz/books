import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { BookServiceService } from 'src/app/shared/book-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

     trigger('books', [
       transition('* => *', [

         query(':enter', style({ opacity: 0 }), {optional: true}),

         query(':enter', stagger('50ms', [
           animate('.6s ease-in', keyframes([
             style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
             style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
             style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
           ]))]), {optional: true})
       ])
     ])

   ]
})
//koniec na 37:19   16.05
export class HomeComponent implements OnInit {

  itemCount : number = 0;
  btnText: string = 'Search';
  goalText: string = 'discworld';
  books: any = [];
  title: string ='';
  author: string;
  flag: boolean = true;
  crieria : string = 'title';
  constructor(private bookServiceService:BookServiceService) { }

  ngOnInit() {
    this.itemCount = this.books.length;
  }
addItem(){
  if(this.goalText !=''){
    this.books.push(this.goalText);
    this.goalText ='';
    this.itemCount = this.books.length;
}
}
change(){
  if(this.flag){
    this.flag =false;
this.crieria = 'author';
  }else{
    this.flag= true;

        this.crieria = 'title';
  }
  console.log(this.flag);
}
getApi(){
        this.itemCount = 0;
        this.books=[];
        if(this.flag){
          this.bookServiceService.getBooksByTitle(this.goalText).subscribe(
            (data:any)=>{
              this.itemCount = data.docs.length;
              console.log(data.docs);
              this.title = data.docs[0].title;
              this.books = data.docs;
      }
    );
  }else{
    this.bookServiceService.getBooksByAuthor(this.goalText).subscribe(
      (data:any)=>{
        this.itemCount = data.docs.length;
        console.log(data.docs);
        this.title = data.docs[0].title;
        this.books = data.docs;
}
);
  }

}
}
