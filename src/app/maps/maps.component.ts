import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'map',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
  standalone: true,
  imports: [GoogleMap, MapMarker],
})
export class MapComponent {
  hpsLat = -18.970594;
  hpsLng = -49.458939;
  center: google.maps.LatLngLiteral = { lat: this.hpsLat, lng: this.hpsLng };
  zoom = 18;
  display: google.maps.LatLngLiteral | undefined;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: this.hpsLat, lng: this.hpsLng },
  ];

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng!.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }
}
