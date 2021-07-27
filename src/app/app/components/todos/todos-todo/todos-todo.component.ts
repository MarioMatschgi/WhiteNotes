import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoListModel } from 'src/app/app/models/todo.model';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Icons } from 'src/app/libraries/util/models/icons.model';
import { UtilService } from 'src/app/libraries/util/services/util.service';
import { toolbarOptions } from 'src/app/app/models/toolbarOptions.model';
import {
  DataLoadService,
  LoaderServices,
} from 'src/app/app/services/data-load.service';

@Component({
  selector: 'todos-todo',
  templateUrl: './todos-todo.component.html',
  styleUrls: ['./todos-todo.component.scss'],
})
export class TodosTodoComponent implements OnInit {
  toolbarOptions = toolbarOptions;
  Icons = Icons;

  todoList: TodoListModel;
  isEditingTitle: boolean;
  contextMenuOpen: boolean;
  viewTodo: TodoItem;

  constructor(
    private auth: AuthService,
    private data_loader: DataLoadService<TodoListModel>,
    private route: ActivatedRoute,
    public loader: LoadService,
    public util: UtilService
  ) {
    data_loader.loader_type = LoaderServices.todo;
  }

  ngOnInit(): void {
    this.loader.load();
    this.auth.sub_userData((data) => {
      if (data) {
        this.data_loader
          .getData(this.route.snapshot.params['toid'])
          .subscribe((todoList) => {
            this.todoList = todoList;
            this.loader.unload();
          });
      }
    }, true);
  }

  submitNewTodo(addInput: HTMLInputElement) {
    this.addTodo(addInput.value);
    addInput.value = '';
    addInput.focus();
  }

  addTodo(text: string) {
    this.todoList.items.push({
      title: text,
    } as TodoItem);

    this.save();
  }

  save() {
    if (this.viewTodo) {
      const idx = this.todoList.items.indexOf(this.viewTodo);
      this.todoList.items[idx] = this.viewTodo;
    }

    this.data_loader.updateData(this.todoList);
    console.log('saving', this.todoList);
  }

  removeTodo(todo: TodoItem) {
    setTimeout(() => {
      const idx = this.todoList.items.indexOf(todo);
      this.todoList.items.splice(idx, 1);

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
