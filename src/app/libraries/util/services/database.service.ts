import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

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
}
