import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  public addFavourite(item: Post){
    this.postService.addFavourite(item);
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
}
