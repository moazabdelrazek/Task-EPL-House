import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-comment',
  templateUrl: './box-comment.component.html',
  styleUrls: ['./box-comment.component.scss']
})
export class BoxCommentComponent implements OnInit {

  // props & inputs is comoing
  @Input('type') type: Boolean | any
  @Input('data') data: [] | any

  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
