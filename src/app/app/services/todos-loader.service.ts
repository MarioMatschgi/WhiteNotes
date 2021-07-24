import { Injectable } from '@angular/core';
import { TodoListModel as TodoListModel } from '../models/todo.model';
import { DataLoaderService } from './data-loader.service';

@Injectable({
  providedIn: 'root',
})
export class TodosLoaderService extends DataLoaderService<TodoListModel> {
  db_path = 'todos';
}
