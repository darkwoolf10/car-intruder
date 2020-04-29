import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from '../../components/blog/create-post/create-post.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [ CreatePostComponent ],
  imports: [
    CommonModule,
    MatInputModule,
    MaterialFileInputModule,
    MatIconModule,
    MatSelectModule
  ]
})

export class BlogModule { }
