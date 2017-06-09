import { Injectable } from "@angular/core";
import { ObservableCursor } from "meteor-rxjs";
import { Post } from "../../../../both/models/post.model";
import { Posts } from "../../../../both/collections/posts.collection";

@Injectable()
export class PostDataService {
    private data: ObservableCursor<Post>;

    constructor() {
        this.data = Posts.find({});
    }

    public getData(): ObservableCursor<Post> {
        return this.data;
    }
}