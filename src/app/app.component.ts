import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  public title = 'intruder';

  public logoPath = 'assets/images/logo.png';

  public headerLinks = [
    {
      title: 'Blog',
      link: '/blog/list'
    },
    {
      title: 'Create post',
      link: '/blog/create-post'
    }
  ];
}
