import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent}   from './home';
import {NoteApp} from './noteapp';
import {ViewBlog} from './viewBlog';


@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
    <nav class="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
        <div class="navbar-header">
            <a class="navbar-brand" ui-sref="home">Run-Eat-Travel</a>
        </div>
        <ul class="nav navbar-nav">
            <li><a ui-sref="reviews">Reviews</a></li>
            <li ng-show="currentUser"><a ui-sref="activity">Activity</a></li>
            <li><a ui-sref="about">About</a></li>
        </ul>
    </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path:'/addNote',  name: 'AddNote',  component: NoteApp},
  {path:'blog/:id',  name: 'Blog',     component: ViewBlog}
])
export class AppComponent { }
