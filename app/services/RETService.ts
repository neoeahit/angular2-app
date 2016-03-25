import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class RETService {

  constructor(private http:Http) { }

  postBlogData(data){
    return this.http.post('/api/add/review', JSON.stringify({review: data})).map((res:Response) => res.json());
  }

  getBlogEntry(id){
    return this.http.post('/api/obtain/review', JSON.stringify({id: id})).map((res:Response) => res.json());
  }

}
