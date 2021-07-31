import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { ObjectiveDashboardComponent } from '../../base/objective-dashboard/objective-dashboard.component';

@Component({
  selector: 'obj-todos-dashboard',
  templateUrl: './obj-todos-dashboard.component.html',
  styleUrls: ['./obj-todos-dashboard.component.scss'],
})
export class ObjTodosDashboardComponent implements OnInit {
  @ViewChild('dashboard') dashboard: ObjectiveDashboardComponent<TodoListModel>;

  constructor(
    public router: RouterService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {}
}
