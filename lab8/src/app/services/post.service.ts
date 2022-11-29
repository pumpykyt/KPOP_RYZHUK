import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { PostRepository } from '../repos/post.repository';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private postRepository: PostRepository) { }
  
  addFavourite(post: Post){
    this.postRepository.addFavourite(post);
  }

  getFavourites(){
    return this.postRepository.getFavourites();
  }

  getPosts(){
    return this.postRepository.fetchPosts();
  }
}