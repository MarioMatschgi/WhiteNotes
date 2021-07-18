import { Encryptable, Encryptor } from './../models/encryptable.model';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService<T extends Encryptable> {
  protected db_path: string;

  constructor(private db: DatabaseService) {}

  // TODO: call decrypt on notes
  getAllData(uid: string): Observable<T[]> {
    return this.db.col_usersData
      .doc(uid)
      .collection(this.db_path)
      .valueChanges()
      .pipe(map((e) => Encryptor.decryptAll(e as T[])));
  }

  // TODO: call decrypt on notes
  getData(uid: string, did: string): Observable<T> {
    return this.db.col_usersData
      .doc(uid)
      .collection(this.db_path)
      .doc(did)
      .valueChanges()
      .pipe(map((e) => Encryptor.decrypt(e as T)));
  }

  // TODO: call encrypt on note
  async addData(uid: string, data: T) {
    data = Encryptor.encrypt(data);

    const doc = await this.db.col_usersData
      .doc(uid)
      .collection(this.db_path)
      .add(data);

    data.id = doc.id;
    await this.db.col_usersData
      .doc(uid)
      .collection(this.db_path)
      .doc(data.id)
      .set(data);
  }

  async updateData(uid: string, data: T) {
    data = Encryptor.encrypt(data);

    await this.db.col_usersData
      .doc(uid)
      .collection(this.db_path)
      .doc(data.id)
      .set(data);
  }
}
