import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from '../../components/blog/create-post/create-post.component';
import { MatInputModule } from '@angular/material/input';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [ CreatePostComponent ],
    imports: [
        CommonModule,
        MatInputModule,
        MaterialFileInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        AgmCoreModule,
        FormsModule
    ]
})

export class BlogModule { }
