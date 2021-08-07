import { Component, Input, OnInit } from '@angular/core';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';

@Component({
  selector: 'obj-boards-root',
  templateUrl: './obj-boards-root.component.html',
  styleUrls: ['./obj-boards-root.component.scss'],
})
export class ObjBoardsRootComponent implements OnInit {
  @Input() fromDashboard: boolean;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
