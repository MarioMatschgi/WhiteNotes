import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardModel } from 'src/app/app/models/objectives/board.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveCreatorComponent } from '../../base/objective-creator/objective-creator.component';

@Component({
  selector: 'obj-boards-creator',
  templateUrl: './obj-boards-creator.component.html',
  styleUrls: ['./obj-boards-creator.component.scss'],
})
export class ObjBoardsCreatorComponent implements OnInit {
  @ViewChild('creator') creator: ObjectiveCreatorComponent<BoardModel>;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {}
}
