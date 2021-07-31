import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import {
  ObjectiveEditorComponent,
  EditorType,
} from '../../base/objective-editor/objective-editor.component';

@Component({
  selector: 'obj-notes-editor',
  templateUrl: './obj-notes-editor.component.html',
  styleUrls: ['./obj-notes-editor.component.scss'],
})
export class ObjNotesEditorComponent implements OnInit {
  @ViewChild('editor') editor: ObjectiveEditorComponent<NoteModel>;
  @Input() mode: EditorType;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
