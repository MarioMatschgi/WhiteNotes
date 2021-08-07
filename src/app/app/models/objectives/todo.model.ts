import { ObjectiveModel } from './objective.model';

export class TodoListModel extends ObjectiveModel {
  items: TodoItem[];
}

export interface TodoItem {
  title: string;
  description: string;
  // TODO: Attatchments
}
