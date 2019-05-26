import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpErrorResponse, HttpRequest, HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  //For getting images from flickr feeds
  getFeeds(tags:any){
    return this.httpClient.get('/api/feeds?tags='+tags);
  }
}
