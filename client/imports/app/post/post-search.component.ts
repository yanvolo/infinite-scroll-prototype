
import {Component} from "@angular/core";
import template from "./post-search.component.html"

@Component({
    template,
    selector: 'post-search'
})
export class PostSearchComponent{
    ngOnInit(){
        console.log("Search Hello!");
    }
    logMessage(){
        console.log("Button Pressed!");
    }
}