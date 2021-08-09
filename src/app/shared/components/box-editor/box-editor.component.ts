import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-editor',
  templateUrl: './box-editor.component.html',
  styleUrls: ['./box-editor.component.scss']
})
export class BoxEditorComponent implements OnInit {

  // props & inputs is comoing
  @Input('type') type: string | any  

  constructor() { }

  ngOnInit(): void {
  }

}
