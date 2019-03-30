import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularComponent } from '../angular/angular.component';
import { MovieComponent } from '../movie/movie.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AngularComponent, MovieComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
