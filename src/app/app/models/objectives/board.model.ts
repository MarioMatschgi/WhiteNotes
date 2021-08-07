import { ObjectiveModel } from './objective.model';

export interface BoardSize {
  row: number;
  col: number;
}

export class BoardModel extends ObjectiveModel {
  items: BoardItemModel[];
}

export class BoardItemModel extends ObjectiveModel {
  position: BoardSize;
  size: BoardSize;
}
