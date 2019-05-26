import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importing home component
import {HomeComponent} from './templates/home/home.component';

//declaring the paths
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
