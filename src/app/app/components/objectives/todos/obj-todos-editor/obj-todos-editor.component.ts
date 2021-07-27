import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { toolbarOptions } from 'src/app/app/models/toolbarOptions.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import {
  EditorType,
  ObjectiveEditorComponent,
} from '../../base/objective-editor/objective-editor.component';

@Component({
  selector: 'obj-todos-editor',
  templateUrl: './obj-todos-editor.component.html',
  styleUrls: ['./obj-todos-editor.component.scss'],
})
export class ObjTodosEditorComponent implements OnInit {
  LoaderServices = LoaderServices;
  toolbarOptions = toolbarOptions;
  URLs = RouterUrls;

  @ViewChild('editor') editor: ObjectiveEditorComponent<TodoListModel>;
  @Input() mode: EditorType;

  constructor() {}

  ngOnInit(): void {}
}
