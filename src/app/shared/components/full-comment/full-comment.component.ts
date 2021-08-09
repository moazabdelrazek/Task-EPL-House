import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.scss']
})
export class FullCommentComponent implements OnInit {

    // props & inputs is comoing
    @Input('reply') reply: Boolean | any
    @Input('state') state: Boolean | any
    @Input('data') data: [] | any

  constructor() { 

  }
  
  
  ngOnInit(): void {
    // console.log(this.data)
  }

}
