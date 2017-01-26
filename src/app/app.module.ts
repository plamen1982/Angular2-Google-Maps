import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { MyGoogleMapsComponent } from './my-google-maps/my-google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfJeVq-2m4B70Rh6Dgrk5uswGcZ5DrX-k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
