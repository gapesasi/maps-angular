import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './maps/maps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  developer = 'Gabriel Pereira';
  linkedin = 'https://www.linkedin.com/in/gabriel-santana0/';
  github = 'https://github.com/gapesasi';
  email = 'gabrielpe1928@gmail.com';
}
