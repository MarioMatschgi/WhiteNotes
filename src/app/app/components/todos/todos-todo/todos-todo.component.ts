import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoItem, TodoListModel } from 'src/app/app/models/todo.model';
import { TodosLoaderService } from 'src/app/app/services/todos-loader.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Icons } from 'src/app/libraries/util/models/icons.model';

@Component({
  selector: 'todos-todo',
  templateUrl: './todos-todo.component.html',
  styleUrls: ['./todos-todo.component.scss'],
})
export class TodosTodoComponent implements OnInit {
  Icons = Icons;

  todoList: TodoListModel;

  constructor(
    private auth: AuthService,
    private todos_loader: TodosLoaderService,
    private route: ActivatedRoute,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loader.load();
    this.auth.sub_userData((data) => {
      if (data) {
        this.todos_loader
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

    this.todos_loader.updateData(this.todoList);
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

    console.log('update');

    this.todos_loader.updateData(this.todoList);
  }
}
