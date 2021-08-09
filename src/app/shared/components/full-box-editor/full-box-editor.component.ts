import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-box-editor',
  templateUrl: './full-box-editor.component.html',
  styleUrls: ['./full-box-editor.component.scss']
})
export class FullBoxEditorComponent implements OnInit {

  // props & inputs is comoing
  @Input('reply') reply: Boolean | any
  @Input('state') state: Boolean | any
  @Input('data') data: [] | any

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
  }

}
