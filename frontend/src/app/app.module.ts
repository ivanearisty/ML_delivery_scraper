import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TweetItemComponent } from './tweet/tweet.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetListTestDataComponent } from './tweet-list-test-data/tweet-list-test-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetItemComponent,
    TweetListComponent,
    TweetListTestDataComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CommonModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
