import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  lat = 49.444431;
  lng = 32.059769;
  marker = {lat: 49.444431, lng: 32.059769, alpha: 0.4};
  private id: number;
  public post = {
    title: '',
    description: '',
    category: '',
    image: ''
  };

  constructor(private httpClient: HttpClient, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;
    this.httpClient.get<any>(environment.backendApi + 'articles/' + this.id).subscribe(res => {
      console.log(res.article);
      this.post = res.article;
    });
  }

}
