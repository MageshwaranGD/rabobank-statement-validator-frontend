import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonPostComponent } from './json-post/json-post.component';
import {StatementResolver} from '../common/rabo-statement.resolver'
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'home',component:JsonPostComponent,resolve:{validatedResponse:StatementResolver}},
  {path:'',redirectTo:'home', pathMatch: 'full'},
  {path:'error',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
