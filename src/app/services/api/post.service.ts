import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Post';
import { environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private createPostPath = 'articles';

  constructor(private httpClient: HttpClient) { }

  public createPost(post: any) {
    return this.httpClient.post(environment.backendApi + this.createPostPath, post)
      .subscribe(response => response);
  }

  public getAllPosts() {
    const posts = this.httpClient.get<any>(environment.backendApi);

    return posts;
  }
}
