import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 42.3600825;
  lng: number = -71.05888010000001;
  zoom: number = 16;
}
