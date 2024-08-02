import {Component} from '@angular/core';
import {GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'map',
  templateUrl: 'maps.component.html',
  standalone: true,
  imports: [GoogleMap],
})

export class MapComponent {
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  display: google.maps.LatLngLiteral | undefined;

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = (event.latLng!.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }
}