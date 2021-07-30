import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveCreatorComponent } from '../../base/objective-creator/objective-creator.component';

@Component({
  selector: 'obj-todos-creator',
  templateUrl: './obj-todos-creator.component.html',
  styleUrls: ['./obj-todos-creator.component.scss'],
})
export class ObjTodosCreatorComponent implements OnInit {
  @ViewChild('creator') creator: ObjectiveCreatorComponent<TodoListModel>;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
