import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxUserComponent } from './components/box-user/box-user.component';
import { BoxCommentComponent } from './components/box-comment/box-comment.component';
import { FullCommentComponent } from './components/full-comment/full-comment.component';
import { BoxEditorComponent } from './components/box-editor/box-editor.component';
import { FullBoxEditorComponent } from './components/full-box-editor/full-box-editor.component';
import { CustomDatePostPipe } from '../core/pipes/custom-date-post.pipe';



@NgModule({
  declarations: [
    BoxUserComponent,
    CustomDatePostPipe,
    BoxEditorComponent,
    BoxCommentComponent,
    FullCommentComponent,
    FullBoxEditorComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BoxUserComponent,
    BoxEditorComponent,
    CustomDatePostPipe,
    BoxCommentComponent,
    FullCommentComponent,
    FullBoxEditorComponent
  ]
})
export class SharedModule { }
