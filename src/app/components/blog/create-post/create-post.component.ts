import {Component, Inject} from '@angular/core';
import { PostService } from '../../../services/api/post.service';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})

export class CreatePostComponent {
  title: string;
  content: string;
  selectedCategory: string;
  categories = [
    {name: 'crash', title: 'Crash'},
    {name: 'auto_violation', title: 'Auto violation'}
  ] as const;
  public files: any[];
  lat = 43.879078;
  lng = -103.4615581;
  marker = {lat: 43.879078, lng: -103.4615581, alpha: 0.4};
  constructor(private postService: PostService, @Inject(DOCUMENT) private document: Document, private router: Router) {
    this.files = [];
  }
  onFileChanged(event: any) {
    this.files = event.target.files;
  }

  addMarker(lat: number, lng: number) {
    this.marker = {lat, lng, alpha: 0.4};
  }

  sendPost() {
    const data = new FormData();

    for (const file of this.files) {
      data.append('photo', file, file.name);
    }

    data.append('title', this.title);
    data.append('description', this.content);
    data.append('longitude', this.marker.lat.toString());
    data.append('latitude', this.marker.lng.toString());
    data.append('category', this.selectedCategory);

    this.postService.createPost(data);
    this.redirectToList();
  }

  redirectToList() {
    this.document.location.href = location.origin + '/blog/list';
  }
}
