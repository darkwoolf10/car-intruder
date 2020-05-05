import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.sass']
})

export class CreatePostComponent implements OnInit {

  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;

  lat = 40.730610;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  categories = [
    {name: 'crash', title: 'Crash'},
    {name: 'auto_violation', title: 'Auto violation'}
  ] as const;

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    this.marker.setMap(this.map);
  }

  ngOnInit(): void {
  }
}
