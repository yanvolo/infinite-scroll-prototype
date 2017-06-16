//Core Imports
import {NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http"

//Neded for Angular Materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//Angular Materials
import {MdButtonModule} from '@angular/material';
import {MdProgressSpinnerModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';


import styleDefault from "@angular/material/prebuilt-themes/indigo-pink.css"


//ngx-infinite-scroll
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//Personal Stuff
import {POSTS_DECLARATIONS} from './post';
import {PostDataService} from "./post/post-data.service";
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
      ...POSTS_DECLARATIONS

  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    PostDataService
  ],
  // Modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    InfiniteScrollModule,
    MdGridListModule,
      MdCardModule,
    MdToolbarModule
  ],
  // Main Component
  bootstrap: [ AppComponent ],
  styles: [styleDefault]
})
export class AppModule {}
