import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CookBookComponent} from './cook-book/cook-book.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'CookBook', component:CookBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
