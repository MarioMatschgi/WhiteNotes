import { Encryptable } from './encryptable.model';
import { ObjectiveModel } from './objective.model';

export class TodoListModel extends Encryptable implements ObjectiveModel {
  title: string;
  description: string;
  items: TodoItem[];
}

export interface TodoItem {
  title: string;
  description: string;
  // TODO: Attatchments
}
