import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../models/Post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  public posts: Post;

  private postsLink = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.postsLink).subscribe((data: Post) => this.posts = data);
  }
}
