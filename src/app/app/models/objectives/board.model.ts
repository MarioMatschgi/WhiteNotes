import { LoaderServices } from '../../services/data-load.service';
import { ObjectiveModel } from './objective.model';

export interface BoardSize {
  row: number;
  col: number;
}

export class BoardSizeHelper {
  static add(a: BoardSize, b: BoardSize): BoardSize {
    return {
      row: +a.row + +b.row,
      col: +a.col + +b.col,
    };
  }

  static sub(a: BoardSize, b: BoardSize): BoardSize {
    return {
      row: +a.row - +b.row,
      col: +a.col - +b.col,
    };
  }

  static mul(a: BoardSize, b: BoardSize): BoardSize {
    return {
      row: +a.row * +b.row,
      col: +a.col * +b.col,
    };
  }

  static div(a: BoardSize, b: BoardSize): BoardSize {
    return {
      row: +a.row / +b.row,
      col: +a.col / +b.col,
    };
  }

  static overlapRects(
    posA: BoardSize,
    sizeA: BoardSize,
    posB: BoardSize,
    sizeB: BoardSize
  ): boolean {
    return this.overlap(
      posA,
      {
        row: +posA.row + +sizeA.row,
        col: +posA.col + +sizeA.col,
      },
      posB,
      {
        row: +posB.row + +sizeB.row,
        col: +posB.col + +sizeB.col,
      }
    );
  }

  static overlap(
    P1: BoardSize,
    P2: BoardSize,
    P3: BoardSize,
    P4: BoardSize
  ): boolean {
    return !(
      P2.row < P3.row ||
      P1.row > P4.row ||
      P2.col < P3.col ||
      P1.col > P4.col
    );
  }
}

export class BoardModel extends ObjectiveModel {
  items: BoardItemModel[];
}

export class BoardItemModel extends ObjectiveModel {
  position: BoardSize;
  size: BoardSize;

  objLoaderType: LoaderServices;
  objPath: string;
  objective: ObjectiveModel;
}
