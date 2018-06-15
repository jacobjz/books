import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'book-details/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[BookDetailsComponent];
