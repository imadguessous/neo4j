import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./componants/home/home.component";
import {UsagerCrudComponent} from "./componants/usager/usager-crud/usager-crud.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'usagers/crud', component: UsagerCrudComponent},



  {path:'', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
