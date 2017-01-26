import { Component, OnInit } from '@angular/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';

@Component({
  selector: 'app-my-google-maps',
  directives:[SebmGoogleMap],
  styleUrls: ['./my-google-maps.component.css']
})
export class MyGoogleMapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'My first angular2-google-maps project';
  lat: number = 42.3600825;
  lng: number = -71.05888010000001;
  zoom: number = 16;

}

