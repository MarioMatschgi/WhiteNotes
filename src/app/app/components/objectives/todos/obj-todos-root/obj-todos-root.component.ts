import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';

@Component({
  selector: 'obj-todos-root',
  templateUrl: './obj-todos-root.component.html',
  styleUrls: ['./obj-todos-root.component.scss'],
})
export class ObjTodosRootComponent implements OnInit {
  @Input() fromDashboard: boolean;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
