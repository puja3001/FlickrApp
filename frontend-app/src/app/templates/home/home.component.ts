import { Component, OnInit } from '@angular/core';

//To call the api service to get the feeds data
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { TagInputModule } from 'ngx-chips';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feedList:any = [];
  tags: any = [];
  constructor(
    private _apiService: ApiService,
    private router: Router,
    private spinnerService : Ng4LoadingSpinnerService
  ) {
    //This is to make whenever we land on this page, the page is refreshed and data is loaded again
    this.router.routeReuseStrategy.shouldReuseRoute = 
    function(){
      return false;
    }
  }

  ngOnInit() {
    this.getFeeds();
  }

  //To get all the feeds using the Api data
  getFeeds(){
    //Show the spinner
    this.spinnerService.show();
    var queryTags: any = "";
    if(this.tags.length > 0){
      var tagsArr: any = [];
      this.tags.map(function(tag){
        console.log(tag.value);
        tagsArr.push(tag.value);
      });
      queryTags = JSON.stringify(tagsArr);
    }
    //Hide the spinner
    this._apiService.getFeeds(queryTags).subscribe(
      data => {
        if(data != null){
          this.feedList = data['images'];
          this.feedList.map(function(feed){
            feed['showTitle'] = false;
          });
        }
        this.spinnerService.hide();
      },
      error => {
        console.log("error");
        //Hide the spinner in case of error so that the user knows the loading is complete
        this.spinnerService.hide();
      }
    )
  }
}
