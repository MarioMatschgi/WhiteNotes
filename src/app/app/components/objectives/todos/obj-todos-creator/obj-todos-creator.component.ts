import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { ObjectiveCreatorComponent } from '../../base/objective-creator/objective-creator.component';

@Component({
  selector: 'obj-todos-creator',
  templateUrl: './obj-todos-creator.component.html',
  styleUrls: ['./obj-todos-creator.component.scss'],
})
export class ObjTodosCreatorComponent implements OnInit {
  LoaderServices = LoaderServices;

  @ViewChild('creator') creator: ObjectiveCreatorComponent<TodoListModel>;

  constructor() {}

  ngOnInit(): void {}
}
