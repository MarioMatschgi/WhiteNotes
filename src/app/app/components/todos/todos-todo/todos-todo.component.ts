import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { TodosLoaderService } from 'src/app/app/services/todos-loader.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';

@Component({
  selector: 'todos-todo',
  templateUrl: './todos-todo.component.html',
  styleUrls: ['./todos-todo.component.scss'],
})
export class TodosTodoComponent implements OnInit {
  todo: TodoListModel;

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
          .getData(data.uid, this.route.snapshot.params['toid'])
          .subscribe((todo) => {
            this.todo = todo;
            this.loader.unload();
          });
      }
    });
  }
}
