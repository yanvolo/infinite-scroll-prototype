import {Component, OnDestroy, OnInit} from "@angular/core";

import {Posts} from "../../../../both/collections/posts.collection";

import template from './post-list.component.html';
import {Post} from "../../../../both/models/post.model";
import {Observable} from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import {MeteorObservable} from "meteor-rxjs";
import Collection = Mongo.Collection;

@Component({
    selector: 'post-list',
    template
})
export class PostListComponent implements OnInit, OnDestroy {
    posts: Post[];
    postsSub: Subscription;
    currentLimit:number;
    chunkSize = 100;

    ngOnInit() {
        this.currentLimit = 0;
        this.posts = [];
        this.addPosts();
        this.postsSub = MeteorObservable.subscribe('posts').subscribe();
        console.log("Hello World!");
        var variable = Observable.from
    }
    addPosts(){
        console.log("Scrolling!");
        //Update Limits
        this.currentLimit+=this.chunkSize;
        var oldLimit = this.currentLimit-this.chunkSize;
        //Get next group of posts and add onto visable posts
        Posts.find({},{skip:oldLimit,limit:this.chunkSize})
            .filter(postArray => (postArray.length == this.chunkSize))
            .subscribe(fullChunk=> fullChunk.forEach(singlePost=>this.posts.push(singlePost)));
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();

    }
}
