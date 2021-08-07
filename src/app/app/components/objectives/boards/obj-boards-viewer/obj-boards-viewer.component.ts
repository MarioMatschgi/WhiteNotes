import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BoardItemModel,
  BoardModel,
  BoardSize,
} from 'src/app/app/models/objectives/board.model';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';

@Component({
  selector: 'obj-boards-viewer',
  templateUrl: './obj-boards-viewer.component.html',
  styleUrls: ['./obj-boards-viewer.component.scss'],
})
export class ObjBoardsViewerComponent implements OnInit {
  @ViewChild('viewer') viewer: ObjectiveViewerComponent<BoardModel>;

  cellSize = 10;
  cellSpacing = 1;

  constructor(public gv: GlobalVariablesService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.viewer.objective.items = [
    //     {
    //       title: 'R0 C0',
    //       position: { row: 0, col: 0 },
    //       size: { row: 1, col: 4 },
    //     } as BoardItemModel,
    //     {
    //       title: 'R1 C1',
    //       position: { row: 1, col: 1 },
    //       size: { row: 1, col: 2 },
    //     } as BoardItemModel,
    //     {
    //       title: 'R2 C2',
    //       position: { row: 2, col: 2 },
    //       size: { row: 1, col: 3 },
    //     } as BoardItemModel,
    //     {
    //       title: 'R3 C3',
    //       position: { row: 3, col: 3 },
    //       size: { row: 1, col: 1 },
    //     } as BoardItemModel,
    //     {
    //       title: 'R3 C0',
    //       position: { row: 3, col: 0 },
    //       size: { row: 1, col: 2 },
    //     } as BoardItemModel,
    //   ];
    //   this.viewer.save();
    // }, 2000);
  }

  dropItem(event: CdkDragDrop<BoardItemModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.viewer.save();
  }

  getTransform(pos: BoardSize): string {
    return `translate(
      ${pos.col * (this.cellSize + this.cellSpacing)}em, 
      ${pos.row * (this.cellSize + this.cellSpacing)}em)`;
  }
  getWidth(size: BoardSize): string {
    return `${size.col * this.cellSize}em`;
  }
  getHeight(size: BoardSize): string {
    return `${size.row * this.cellSize}em`;
  }
}
