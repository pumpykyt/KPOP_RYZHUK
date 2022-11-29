import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }


  title = 'lab5';
  favPosts: any[] = [];
  posts: any[] = [];
  ngOnInit() {
    fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => {
      this.posts = data;
    });
  }

  public openModal(item: any){
    this.dialog.open(PopupComponent, {
      data: item
    });
  }

  public addFav(item: any){
    item.isFav = true;
    this.favPosts.push(item);
  }
}
