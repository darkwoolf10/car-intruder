import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePostComponent } from './components/blog/create-post/create-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { ListComponent } from './components/blog/list/list.component';
import { PostComponent } from './components/blog/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog/create-post', component: CreatePostComponent },
  { path: 'blog/list', component: ListComponent },
  { path: 'blog/:id', component: PostComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
