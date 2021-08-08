import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
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
  itemSize = 10;
  cellSize = this.itemSize / 3;
  cellSpacing = 1;

  addOrCreate: '' | 'add' | 'create' = '';

  constructor(
    public gv: GlobalVariablesService,
    private uid: UIDService,
    private loadService: DataLoadService<ObjectiveModel>
  ) {}

  ngOnInit(): void {}

  viewerLoaded(obj: BoardModel) {
    for (const item of obj.items) {
      this.viewer.loader.load();
      this.loadService.loaderType = item.objLoaderType;
      this.loadService.getData(item.objPath).subscribe((o) => {
        const idx = this.viewer.objective.items.findIndex(
          (el) => (el.id = item.id)
        );
        this.viewer.objective.items[idx].objective = o;
        this.viewer.loader.unload();
      });
    }
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

    // TODO: CHECK IF POSITION IS VALID (NO OVERLAPS)
    const idx = this.viewer.objective.items.findIndex(
      (el) => el.id == this.currentlyDragging.id
    );
    this.viewer.objective.items[idx].position = bpos;

    this.viewer.save();
  }

  emToPx(px): number {
    var point = (px * 3) / 4;
    return point / 12;
  }

  viewToBoardPos(vPos: number): number {
    return Math.max(Math.round(vPos / (this.cellSize + this.cellSpacing)), 0);
  }

  boardToViewPos(bPos: number): number {
    return bPos * (this.cellSize + this.cellSpacing);
  }

  getViewSize(size: number) {
    return `${size * this.itemSize}em`;
  }

  getViewPos(pos: number): string {
    return `${this.boardToViewPos(pos)}em`;
  }
}
