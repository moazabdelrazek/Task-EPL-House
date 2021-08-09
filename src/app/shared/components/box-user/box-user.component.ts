import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-user',
  templateUrl: './box-user.component.html',
  styleUrls: ['./box-user.component.scss']
})
export class BoxUserComponent implements OnInit {

  // props & inputs is comoing
  @Input('type') type: Boolean | any
  @Input('data') data: [] | any
  @Input('isOnline') isOnline: Boolean | any  

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
  }

}
