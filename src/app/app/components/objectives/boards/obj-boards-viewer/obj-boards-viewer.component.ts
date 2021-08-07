import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardModel } from 'src/app/app/models/objectives/board.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';

@Component({
  selector: 'obj-boards-viewer',
  templateUrl: './obj-boards-viewer.component.html',
  styleUrls: ['./obj-boards-viewer.component.scss'],
})
export class ObjBoardsViewerComponent implements OnInit {
  @ViewChild('viewer') viewer: ObjectiveViewerComponent<BoardModel>;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
