import {Component} from '@angular/core';
import {DemoService} from './services/demo.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app';
  info: string ='';
  constructor(private _demoService: DemoService) {
  }


}
