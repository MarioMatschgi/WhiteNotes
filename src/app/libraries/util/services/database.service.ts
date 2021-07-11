import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NoteModel } from 'src/app/app/models/note.model';

/**
 * Service for Database
 */
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  /**
   * Collection of user data
   */
  col_usersData: AngularFirestoreCollection<any>;

  /**
   * Collection of recipes
   */
  col_notes: AngularFirestoreCollection<any>;

  /**
   * Collection of private user data
   */
  col_usersPrivate: AngularFirestoreCollection<any>;

  /**
   * Collection of public user data
   */
  col_usersPublic: AngularFirestoreCollection<any>;

  constructor(public db: AngularFirestore) {
    this.col_usersData = this.db.collection('users-data');
    this.col_usersPrivate = this.db.collection('users-private');
    this.col_usersPublic = this.db.collection('users-public');
  }

  // TODO: call decrypt on notes
  getAllNotes(uid: string): Observable<NoteModel[]> {
    return this.col_usersData
      .doc(uid)
      .collection('notes')
      .valueChanges()
      .pipe(map((e) => e as NoteModel[]));
  }

  // TODO: call decrypt on notes
  getNote(uid: string, nid: string): Observable<NoteModel> {
    return this.col_usersData
      .doc(uid)
      .collection('notes')
      .doc(nid)
      .valueChanges()
      .pipe(map((e) => e as NoteModel));
  }

  // TODO: call encrypt on note
  async addNote(uid: string, note: NoteModel) {
    const doc = await this.col_usersData.doc(uid).collection('notes').add(note);

    note.id = doc.id;
    await this.col_usersData
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .set(note);
  }

  async updateNote(uid: string, note: NoteModel) {
    await this.col_usersData
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .set(note);
  }
}
