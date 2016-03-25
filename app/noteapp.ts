//our root app component
import {Component} from 'angular2/core'
import {ContenteditableModel} from './contenteditable-model'
import {RETService} from './services/RETService'

@Component({
  selector: 'my-app',
  providers: [],
  directives: [ContenteditableModel],
  template: `
    <div placeholder="Start Typing..." contenteditable="true" [(contenteditableModel)]="text"></div>
    <button (click)="postBlogData()">Submit</button>
  `
})
export class NoteApp {
  text: string;

  constructor(private retService: RETService) {
    this.text = ""
  }

  postBlogData(){
    this.retService.postBlogData(this.text).subscribe(
      // the first argument is a function which runs on success
      data => { console.log("success")},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }
  }
