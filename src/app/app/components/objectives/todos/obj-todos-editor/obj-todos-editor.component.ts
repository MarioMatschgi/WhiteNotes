import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
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
  @ViewChild('editor') editor: ObjectiveEditorComponent<TodoListModel>;
  @Input() mode: EditorType;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}

  beforeAddEvent(data: TodoListModel) {
    data.items = [];
  }
}
