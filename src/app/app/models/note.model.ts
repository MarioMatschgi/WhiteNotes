import { Encryptable } from './encryptable.model';
import { ObjectiveModel } from './objective.model';

export class NoteModel extends Encryptable implements ObjectiveModel {
  body: string;
}
