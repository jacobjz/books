import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { DemoService } from '../services/demo.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
      trigger('goals', [
        transition('* => *', [
          query(':enter', style({ opacity: 0 }), {optional: true}),
          query(':enter', stagger('20ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
            ]))]), {optional: true})
            ,
          query(':leave', stagger('20ms', [
            animate('.6s ease-out', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
              style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
            ]))]), {optional: true})
        ])
      ])
    ]
})

export class HomeComponent implements OnInit {
  itemCount  : number;
  searchText : string = "discworld"
  criteria : string ="a title";
  switch : boolean = true;
  goals = [];
  isLoading : boolean = false;
  disabled : string = 'disabled';
  constructor(private _bookService : DemoService) { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem(){
    this._bookService.getBooksByTitle(this.searchText);
    this.goals.push(this.searchText);
    this.searchText ='';
    this.itemCount = this.goals.length;
}
  search(){
    this.itemCount = 0;
    this.goals = [];
    console.log("searching: "+ this.searchText);
     this.isLoading = true;
    this._bookService.getBooksByTitle(this.searchText).subscribe(
        (data:any)=>{
          this.isLoading = false;
          for (let i = 0; i < data.docs.length; i++) {
            if(typeof data.docs[i].isbn !== "undefined"){
              this.goals.push(data.docs[i]);
              }
          }
          error => {
            alert('error has occured');
          }
          this.itemCount = this.goals.length;
        }
      )
}
getIsbn(i:number){
  if(typeof this.goals[i].isbn !== "undefined"){
    console.log(this.goals[i].isbn[0]);
    }
}
switchCriteria(){
  console.log("click");
}
    removeItem(i:number) {
  this.goals.splice(i, 1);
}
}
