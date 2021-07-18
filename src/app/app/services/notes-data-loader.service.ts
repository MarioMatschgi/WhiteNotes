import { Injectable } from '@angular/core';
import { NoteModel } from './../models/note.model';
import { DataLoaderService } from './data-loader.service';

@Injectable({
  providedIn: 'root',
})
export class NotesLoaderService extends DataLoaderService<NoteModel> {
  db_path = 'notes';
}
