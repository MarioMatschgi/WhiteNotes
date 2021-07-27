import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoListModel } from 'src/app/app/models/todo.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { RouterUrls } from 'src/app/libraries/util/models/router.model';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { ObjectiveDashboardComponent } from '../../base/objective-dashboard/objective-dashboard.component';

@Component({
  selector: 'obj-todos-dashboard',
  templateUrl: './obj-todos-dashboard.component.html',
  styleUrls: ['./obj-todos-dashboard.component.scss'],
})
export class ObjTodosDashboardComponent implements OnInit {
  LoaderServices = LoaderServices;
  URLs = RouterUrls;

  @ViewChild('dashboard') dashboard: ObjectiveDashboardComponent<TodoListModel>;

  constructor(public router: RouterService) {}

  ngOnInit(): void {}
}
