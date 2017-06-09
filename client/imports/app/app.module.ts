import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

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
    BrowserModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
