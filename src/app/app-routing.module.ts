import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatePostComponent} from './components/blog/create-post/create-post.component';

const routes: Routes = [
  { path: 'blog/create-post', component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
