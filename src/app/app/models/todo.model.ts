import { Encryptable } from './encryptable.model';

export interface TodoListModel extends Encryptable {
  title: string;
  description: string;
  items: TodoItem[];
}

export interface TodoItem {
  title: string;
  description: string;
  // TODO: Attatchments
}
