import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBoxEditorComponent } from './full-box-editor.component';

describe('FullBoxEditorComponent', () => {
  let component: FullBoxEditorComponent;
  let fixture: ComponentFixture<FullBoxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullBoxEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullBoxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
