import { Component, ViewEncapsulation } from '@angular/core';
import { IPost } from './core/interfaces/post';
import { MainServicesApiService } from './core/services/main-services-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  // init vars 
  title = 'Task-EPL-House';

  listOfPosts!: Array<IPost> 

  constructor(private MainServe: MainServicesApiService) {
    // get fake data
    this.MainServe.getListPost().subscribe(
      (res: any) => {
        this.listOfPosts = res
      },
      err => console.log(err),
    )

  }



  // if this functions is run =>
  // her will get all count main comment of post & replay comments
  getAllCountComment(comment: any) {
    var count = comment.length
    for (let i = 0; i < comment.length; i++) {
      parseInt(count += comment[i].list_reply.length)
      
    }
    return count
  }


  //*********************** Random Test ***********************//
  //*********************** Random Test ***********************//
  //*********************** Random Test ***********************//
  
  // cusome formate date to show date post from him
  // formateDate(date: string): string | any {

  //   var 
  //     current = new Date(),
  //     datePost = new Date(date);


  //     this.formateGetDay(datePost.getDay())
  //   // console.log(this.formateGetYear(new Date('11/1/2019').getFullYear()))
  //   // toLocaleString => 8/8/2021, 6:00:02 PM
  //   // toUTCString => Sun, 08 Aug 2021 16:00:02 GMT

  //   if (datePost.toLocaleString() == current.toLocaleString()) {
  //     return 'Just Now'
  //   } 
  //   else {
  //     return datePost.toLocaleString()
  //   }
  // }


  // start functions formate date

  // formateGetYear to get year between current date and date post
  // formateGetYear(year: string | any) {
  //   const current = new Date();
  //   const postYeat = Math.abs(year - new Date().getFullYear());

  //   if (postYeat == 0) {
  //     return current.getFullYear()
  //   } else if (year > current.getFullYear()) {
  //     return 'error => date post biger than current date'
  //   } else if (postYeat >= 1) {
  //     return postYeat
  //   }
  //   return null
  // }

  // // formateGetDay
  // formateGetDay(day: string | number | any) {
    
  //   var nameDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  //   return nameDays[day]
  // }
  

  // end functions formate date


}
