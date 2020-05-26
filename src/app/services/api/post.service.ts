import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiUrl = '';
  private createPostPath = '';

  constructor(private httpClient: HttpClient) { }

  public createPost(post: Post) {
    return this.httpClient.post(this.apiUrl + this.createPostPath, post)
      .subscribe(response => response);
  }
}
