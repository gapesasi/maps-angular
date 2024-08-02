import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'map',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
  standalone: true,
  imports: [GoogleMap, MapMarker, MapInfoWindow],
})
export class MapComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  hpsLat = -18.970594;
  hpsLng = -49.458939;
  center: google.maps.LatLngLiteral = { lat: this.hpsLat, lng: this.hpsLng };
  zoom = 18;
  display: google.maps.LatLngLiteral | undefined;
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: this.hpsLat, lng: this.hpsLng },
  ];
  options: google.maps.InfoWindowOptions = {};

  moveMap(event: google.maps.MapMouseEvent) {
    this.center = event.latLng!.toJSON();
  }

  move(event: google.maps.MapMouseEvent) {
    this.display = event.latLng!.toJSON();
  }

  openInfoWindow(marker: MapMarker) {
    let markerLat = marker.getPosition()?.lat();
    let markerLng = marker.getPosition()?.lng();
    let opts = {
      headerContent: `HPS Tecnologia`,
      content: `Latitude: ${markerLat}<br />Longitude: ${markerLng}`,
    };
    let cent = {
      lat: markerLat!,
      lng: markerLng!,
    };

    this.options = opts;
    this.center = cent;
    this.infoWindow!.open(marker);
  }
}
