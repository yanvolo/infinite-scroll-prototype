import {Posts} from "../../../both/collections/posts.collection";
import {Observable} from "rxjs/Observable";
//return entire database
Meteor.publish('posts', () => {return Posts.find({});});



