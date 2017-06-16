import Collection = Mongo.Collection;
import {Post} from "../models/post.model";
import {MongoObservable} from "meteor-rxjs";

export const Posts = new MongoObservable.Collection<Post>('posts');