import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/blog/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'blog/create-post', component: CreatePostComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
