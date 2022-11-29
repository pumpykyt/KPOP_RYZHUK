import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor() { }

  @Input() posts: any[] = [];


  ngOnInit() {
  }

}
