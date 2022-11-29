import { PostRepository } from './repos/post.repository';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './services/post.service';
import { FavouritesComponent } from './favourites/favourites.component';

@NgModule({
  declarations: [	
    AppComponent,
      FavouritesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostRepository, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
