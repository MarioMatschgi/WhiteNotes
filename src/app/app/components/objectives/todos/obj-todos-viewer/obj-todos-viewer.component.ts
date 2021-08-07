import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
  TodoItem,
  TodoListModel,
} from 'src/app/app/models/objectives/todo.model';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { UtilService } from 'src/app/libraries/util/services/util.service';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { UIDService } from 'src/app/libraries/util/services/uid.service';
import { PopoverComponent } from 'src/app/libraries/popover/components/popover.component';

@Component({
  selector: 'obj-todos-viewer',
  templateUrl: './obj-todos-viewer.component.html',
  styleUrls: ['./obj-todos-viewer.component.scss'],
})
export class ObjTodosViewerComponent implements OnInit {
  @ViewChild('viewer') viewer: ObjectiveViewerComponent<TodoListModel>;

  viewTodo: TodoItem = null;

  constructor(
    public util: UtilService,
    public gv: GlobalVariablesService,
    private uid: UIDService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  submitNewTodo(addInput: HTMLInputElement) {
    this.addTodo(addInput.value);
    addInput.value = '';
    addInput.focus();
  }

  addTodo(text: string) {
    this.viewer.objective.items.push({
      id: this.uid.uid(this.viewer.objective.items.map((el) => el.id)),
      title: text,
    } as TodoItem);

    this.viewer.save();
  }

  removeTodo(todo: TodoItem) {
    setTimeout(() => {
      const idx = this.viewer.objective.items.indexOf(todo);
      this.viewer.objective.items.splice(idx, 1);

      this.viewTodo = null;
      this.viewer.save();
    });
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

    this.viewer.save();
  }

  closeTodo() {
    if (!this.viewTodo) return;

    this.viewTodo = null;
    this.changeDetection.detectChanges();
  }

  saveViewTodo() {
    const idx = this.viewer.objective.items.findIndex(
      (el) => el.id == this.viewTodo.id
    );
    this.viewer.objective.items[idx] = this.viewTodo;

    this.viewer.save();
  }
}
