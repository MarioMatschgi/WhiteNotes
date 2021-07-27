import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { Icons } from 'src/app/libraries/util/models/icons.model';
import {
  DataLoadService,
  LoaderServices,
} from 'src/app/app/services/data-load.service';

@Component({
  selector: 'todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.scss'],
})
export class TodosDashboardComponent implements OnInit {
  URLs = RouterUrls;
  Icons = Icons;
  todos: TodoListModel[];

  constructor(
    public router: RouterService,
    private auth: AuthService,
    private data_loader: DataLoadService<TodoListModel>
  ) {
    data_loader.loader_type = LoaderServices.todo;
  }

  ngOnInit(): void {
    this.auth.sub_userData(async (data) => {
      if (data) {
        this.data_loader.getAllData().subscribe((todos) => {
          this.todos = todos;
        });
      }
    }, true);
  }
}
