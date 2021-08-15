import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  BoardSizeHelper,
  BoardItemModel,
  BoardModel,
  BoardSize,
} from 'src/app/app/models/objectives/board.model';
import { ObjectiveModel } from 'src/app/app/models/objectives/objective.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { UIDService } from 'src/app/libraries/util/services/uid.service';
import { ObjectiveViewerComponent } from '../../base/objective-viewer/objective-viewer.component';

@Component({
  selector: 'obj-boards-viewer',
  templateUrl: './obj-boards-viewer.component.html',
  styleUrls: ['./obj-boards-viewer.component.scss'],
})
export class ObjBoardsViewerComponent implements OnInit {
  @ViewChild('viewer') viewer: ObjectiveViewerComponent<BoardModel>;

  currentlyDragging: BoardItemModel;

  // TODO: Drag drop grid seperate component
  // TODO: SPACING IN CSS (WRAPPER WITH PADDING)
  /** Spacing between cells in steps */
  cellSpacing = 0.5;
  /** Amount of steps in an item */
  steps = 2;
  /** Size of a boart item */
  itemSize = 10;

  addOrCreate: '' | 'add' | 'create' = '';

  constructor(
    public gv: GlobalVariablesService,
    private uid: UIDService,
    private loadService: DataLoadService<ObjectiveModel>
  ) {}

  ngOnInit(): void {}

  viewerLoaded(obj: BoardModel) {
    for (const item of obj.items) {
      this.viewer.loader.load(`${item.objLoaderType}/${item.id}`);
      this.loadService.loaderType = item.objLoaderType;
      this.loadService.getData(item.objPath).subscribe((o) => {
        const idx = this.viewer.objective.items.findIndex(
          (el) => el.id == item.id
        );
        this.viewer.objective.items[idx].objective = o;
        this.viewer.loader.unload(`${item.objLoaderType}/${item.id}`);
      });
    }
    this.loadService.loaderType = this.gv.LoaderServices.board;
  }

  dragEnded(evt: CdkDragEnd) {
    const style = evt.source.element.nativeElement.style;

    const off = style.transform
      ? style.transform
          .match(/\(.+?\)/)[0]
          .slice(1, -6)
          .replaceAll('px', '')
          .split(', ')
      : [0, 0];
    const pos = [style.left.replace('em', ''), style.top.replace('em', '')];

    const bpos: BoardSize = {
      row: this.viewToBoardPos(+pos[1] + this.emToPx(+off[1])),
      col: this.viewToBoardPos(+pos[0] + this.emToPx(+off[0])),
    };

    evt.source._dragRef.reset();

    const idx = this.viewer.objective.items.findIndex(
      (el) => el.id == this.currentlyDragging.id
    );
    const b = this.isBoardSlotBlocked(
      bpos,
      this.viewer.objective.items[idx].size,
      this.currentlyDragging.id
    );

    if (!b) {
      this.viewer.objective.items[idx].position = bpos;
      this.viewer.save();
    }
  }

  emToPx(px): number {
    var point = (px * 3) / 4;
    return point / 12;
  }

  viewToBoardPos(vPos: number): number {
    const a =
      vPos /
      ((this.itemSize / this.steps) * (1 + this.cellSpacing / this.steps));

    return Math.max(Math.round(a), 0);
  }

  boardToViewPos(bPos: number): number {
    return (
      ((bPos * this.itemSize) / this.steps) *
      (1 + this.cellSpacing / this.steps)
    );
  }

  getViewSize(size: number) {
    return `${size * this.itemSize}em`;
  }

  getViewPos(pos: number): string {
    return `${this.boardToViewPos(pos)}em`;
  }

  isBoardSlotBlocked(
    pos: BoardSize,
    size: BoardSize,
    ignoreId: string = ''
  ): boolean {
    for (const item of this.viewer.objective.items) {
      if (item.id == ignoreId) continue;
      if (BoardSizeHelper.overlapRects(pos, size, item.position, item.size))
        return true;
    }

    return false;
  }

  addObjectiveToBoard(obj: BoardItemModel) {
    this.addOrCreate = '';
    obj.id = this.uid.uid(this.viewer.objective.items.map((e) => e.id));
    obj.position = { row: 0, col: 0 } as BoardSize;
    obj.size = { row: 1, col: 1 } as BoardSize;
    this.viewer.objective.items.push(obj);
    this.viewer.save();
  }
}
