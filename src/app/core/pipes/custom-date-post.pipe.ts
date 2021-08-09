import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePost'
})
export class CustomDatePostPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var 
      floor = Math.floor,
      currentDate = new Date(),
      postDate = new Date(value),
      init = Math.abs(currentDate.getTime() - postDate.getTime()),
      second = floor(init / 1000),
      min = floor(second / 60),
      hours = floor(min / 60),
      day = floor(hours / 24),
      month = floor(day / 30),
      years = floor(month / 12),
      week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      if (init == 0 || Math.floor(min) == 0) {
        return 'Just now'
      } 
      else if (month >= 12) {
        return years + ' y'
      }
      else if (day >= 30) {
        return months[postDate.getMonth()] + ' ' + postDate.getDate() + 1
      }
      else if (hours >= 24) {
        return day + ' day'
      }      
      else if (min >= 60) {
        return hours + ' hrs'
      }
      else if (min < 60) {
        return min + ' min'
      }

      return postDate.toDateString()

  } 

}
