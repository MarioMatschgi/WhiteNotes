import { BoardModel } from '../../../../models/objectives/board.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { RouterService } from 'src/app/libraries/util/services/router.service';
import { ObjectiveDashboardComponent } from '../../base/objective-dashboard/objective-dashboard.component';

@Component({
  selector: 'obj-boards-dashboard',
  templateUrl: './obj-boards-dashboard.component.html',
  styleUrls: ['./obj-boards-dashboard.component.scss'],
})
export class ObjBoardsDashboardComponent implements OnInit {
  @ViewChild('dashboard') dashboard: ObjectiveDashboardComponent<BoardModel>;

  constructor(
    public router: RouterService,
    public gv: GlobalVariablesService
  ) {}

  ngOnInit(): void {}
}
