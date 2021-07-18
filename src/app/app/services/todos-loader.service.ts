import { TodoModel } from './../models/todo.model';
import { Injectable } from '@angular/core';
import { DataLoaderService } from './data-loader.service';

@Injectable({
  providedIn: 'root',
})
export class TodosLoaderService extends DataLoaderService<TodoModel> {
  db_path = 'todos';
}
