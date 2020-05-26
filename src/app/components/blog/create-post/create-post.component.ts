import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from '../../../services/api/category.service';
import { PostService } from '../../../services/api/post.service';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})

export class CreatePostComponent {
  constructor(private postService: PostService) { }
  title: string;
  content: string;
  selectedCategory: string;
  categories = [
    {name: 'crash', title: 'Crash'},
    {name: 'auto_violation', title: 'Auto violation'}
  ] as const;

  lat = 43.879078;
  lng = -103.4615581;
  marker = {lat: 43.879078, lng: -103.4615581, alpha: 0.4};

  addMarker(lat: number, lng: number) {
    this.marker = {lat, lng, alpha: 0.4};
  }

  sendPost() {
    const post: Post = {
      title: this.title,
      content: this.content,
      fileName: 'file',
      lat: this.marker.lat,
      lng: this.marker.lng,
      categories: this.selectedCategory
    };

    console.log(post);

    // this.postService.createPost(post);
  }
}
