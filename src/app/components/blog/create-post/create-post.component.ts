import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})
export class CreatePostComponent implements OnInit {
  constructor() { }

  categories = [
    {name: 'crash', title: 'Crash'},
    {name: 'auto_violation', title: 'Auto violation'}
  ] as const;

  ngOnInit(): void {
  }
}
