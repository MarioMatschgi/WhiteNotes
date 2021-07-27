import { Icons } from './../../../../../libraries/util/models/icons.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoItem, TodoListModel } from 'src/app/app/models/todo.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { UtilService } from 'src/app/libraries/util/services/util.service';

@Component({
  selector: 'obj-todos-viewer',
  templateUrl: './obj-todos-viewer.component.html',
  styleUrls: ['./obj-todos-viewer.component.scss'],
})
export class ObjTodosViewerComponent implements OnInit {
  LoaderServices = LoaderServices;
  Icons = Icons;

  @ViewChild('viewer') viewer: ObjectiveViewerComponent<TodoListModel>;

  viewTodo: TodoItem;

  constructor(public util: UtilService) {}

  ngOnInit(): void {}

  submitNewTodo(addInput: HTMLInputElement) {
    this.addTodo(addInput.value);
    addInput.value = '';
    addInput.focus();
  }

  addTodo(text: string) {
    this.viewer.objective.items.push({
      title: text,
    } as TodoItem);

    this.save();
  }

  save() {
    if (this.viewTodo) {
      const idx = this.viewer.objective.items.indexOf(this.viewTodo);
      this.viewer.objective.items[idx] = this.viewTodo;
    }

    this.viewer.loadService.updateData(this.viewer.objective);
  }

  removeTodo(todo: TodoItem) {
    setTimeout(() => {
      const idx = this.viewer.objective.items.indexOf(todo);
      this.viewer.objective.items.splice(idx, 1);

      this.viewTodo = null;
      this.save();
    });
  }

  saveTitle() {
    this.save();
  }

  dropItem(event: CdkDragDrop<TodoItem[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.save();
  }
}
