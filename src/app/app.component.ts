import { Component } from '@angular/core';
import { Marvels } from '../Data/marvels';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  language = 'Typescript'
  // movies = marvels
  movie = Marvels[0]
}
