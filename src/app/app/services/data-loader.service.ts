import { Encryptable, Endecryptor } from './../models/encryptable.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, delay, distinct, map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataLoaderService<T extends Encryptable> {
  protected db_path: string;

  constructor(private db: DatabaseService, public auth: AuthService) {}

  // TODO: call decrypt on notes
  getAllData(): Observable<T[]> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.db_path)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decryptAll(e as T[])));
  }

  // TODO: call decrypt on notes
  getData(did: string): Observable<T> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.db_path)
      .doc(did)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decrypt(e as T)));
  }

  // TODO: call encrypt on note
  async addData(data: T) {
    const d = Endecryptor.encrypt(data);

    const doc = await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.db_path)
      .add(d);

    d.id = doc.id;
    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.db_path)
      .doc(d.id)
      .set(d);

    return d.id;
  }

  async updateData(data: T) {
    const d = Endecryptor.encrypt(data);

    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.db_path)
      .doc(d.id)
      .set(d);

    return d.id;
  }
}
