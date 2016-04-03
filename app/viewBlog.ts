import {Component} from 'angular2/core'
import {RETService} from './services/RETService'
import {RouteParams} from 'angular2/router';


@Component({
  template: `
  <div class="container">
  <span [innerHtml]="blogData.story"></span>
  </div>
  `
})
export class ViewBlog {
  blogData: string;
  routeParam: RouteParams;
  _id: string;

  constructor(routeParams: RouteParams, private retService: RETService) {
    this.blogData = ""
    this.routeParam = routeParams;
    this._id = this.routeParam.params.id;
    this.getBlogData();
  }

  getBlogData(){
    this.retService.getBlogEntry(this._id).subscribe(
      data => {
      console.log(data.story)
      this.blogData = data},
      err => console.error(err),
      () => console.log(this._id)
    );
  }
  }
