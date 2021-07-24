import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { TodosLoaderService } from 'src/app/app/services/todos-loader.service';
import { TodoListModel } from 'src/app/app/models/todo.model';

@Component({
  selector: 'todos-dashboard',
  templateUrl: './todos-dashboard.component.html',
  styleUrls: ['./todos-dashboard.component.scss'],
})
export class TodosDashboardComponent implements OnInit {
  URLs = RouterUrls;
  todos: TodoListModel[];

  constructor(
    public router: RouterService,
    private auth: AuthService,
    private todos_loader: TodosLoaderService
  ) {}

  ngOnInit(): void {
    this.auth.sub_userData(async (data) => {
      if (data) {
        this.todos_loader.getAllData(data.uid).subscribe((todos) => {
          this.todos = todos;
        });
      }
    }, true);
  }
}
