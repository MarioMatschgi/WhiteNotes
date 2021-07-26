import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { toolbarOptions } from 'src/app/app/models/toolbarOptions.model';
import { TodosLoaderService } from 'src/app/app/services/todos-loader.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';

@Component({
  selector: 'todos-base',
  templateUrl: './todos-base.component.html',
  styleUrls: ['./todos-base.component.scss'],
})
export class TodosBaseComponent implements OnInit {
  toolbarOptions = toolbarOptions;
  URLs = RouterUrls;

  @Input() mode: 'add' | 'edit';
  @ViewChild('form') form: NgForm;

  todo: TodoListModel = {} as TodoListModel;

  constructor(
    public loader: LoadService,
    private router: RouterService,
    private todo_loader: TodosLoaderService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.router.nav_backward();
  }
  async add() {
    if (!this.isFormValid()) return;

    this.loader.load();

    this.todo.items = [];
    this.todo.id = await this.todo_loader.addData(this.todo);

    this.loader.unload();

    this.router.nav(this.URLs.todos_todo, [this.todo.id]);
  }
  async save() {
    if (!this.isFormValid()) return;

    this.loader.load();

    await this.todo_loader.updateData(this.todo);

    this.loader.unload();
  }

  isFormValid(): boolean {
    this.form.form.markAllAsTouched();
    return this.form.form.valid;
  }
}
