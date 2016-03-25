import {Component} from 'angular2/core'
import {ContenteditableModel} from './contenteditable-model'
import {RETService} from './services/RETService'

@Component({
  selector: 'my-app',
  providers: [],
  directives: [ContenteditableModel],
  template: `
  <button style="z-index:100" (click)="postBlogData()">Submit</button>
    <div placeholder="Start Typing..." contenteditable="true" [(contenteditableModel)]="text"></div>
  `
})
export class NoteApp {
  text: string;

  constructor(private retService: RETService) {
    this.text = ""
  }

  postBlogData(){
    this.retService.postBlogData(this.text).subscribe(
      data => { console.log("success")},
      err => console.error(err),
      () => console.log('done posting data')
    );
  }
  }
