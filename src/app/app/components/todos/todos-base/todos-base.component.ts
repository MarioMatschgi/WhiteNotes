import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { toolbarOptions } from 'src/app/app/models/toolbarOptions.model';
import {
  DataLoadService,
  LoaderServices,
} from 'src/app/app/services/data-load.service';
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
    private data_loader: DataLoadService<TodoListModel>,
    public gv: GlobalVariablesService
  ) {
    data_loader.loader_type = LoaderServices.todo;
  }

  ngOnInit(): void {}

  cancel() {
    this.router.nav_backward();
  }
  async add() {
    if (!this.isFormValid()) return;

    this.loader.load();

    this.todo.items = [];
    this.todo.id = await this.data_loader.addData(this.todo);

    this.loader.unload();

    this.router.nav(this.URLs.todos_todo, [this.todo.id]);
  }
  async save() {
    if (!this.isFormValid()) return;

    this.loader.load();

    await this.data_loader.updateData(this.todo);

    this.loader.unload();
  }

  isFormValid(): boolean {
    this.form.form.markAllAsTouched();
    return this.form.form.valid;
  }
}
