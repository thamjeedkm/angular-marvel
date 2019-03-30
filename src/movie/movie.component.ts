import { Component, OnInit, Input } from '@angular/core';
import { Marvel } from '../interface/marvel';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  marvelMovie: Marvel

  constructor() { }

  ngOnInit() {
  }

}