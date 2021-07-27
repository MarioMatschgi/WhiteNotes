import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NoteModel } from 'src/app/app/models/note.model';
import { toolbarOptions } from 'src/app/app/models/toolbarOptions.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
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
  LoaderServices = LoaderServices;
  toolbarOptions = toolbarOptions;
  URLs = RouterUrls;

  @ViewChild('editor') editor: ObjectiveEditorComponent<NoteModel>;
  @Input() mode: EditorType;

  constructor() {}

  ngOnInit(): void {}
}
