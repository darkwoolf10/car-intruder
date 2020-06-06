import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  public markers = [];
  private alpha = 0.8;
  lat = environment.defaultLat;
  lng = environment.defaultLng;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<any>(environment.backendApi + 'map').subscribe(res => {
      this.markers = res.locations.map((item) => {
        const location = item.location.split(', ');

        return {
          lat: location[1],
          lng: location[0],
          alpha: this.alpha
        };
      });
    });
  }
}
