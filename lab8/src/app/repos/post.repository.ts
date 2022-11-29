import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../models/post.model";

const apiUrl: string = 'http://jsonplaceholder.typicode.com/posts';

@Injectable()
export class PostRepository{

    private favourites: Post[] = [];

    constructor(private httpClient: HttpClient){}

    fetchPosts(){
        return this.httpClient.get<Post[]>(apiUrl);
    }

    addFavourite(post: Post){
        this.favourites.push(post);
    }

    getFavourites(){
        return this.favourites;
    }
}