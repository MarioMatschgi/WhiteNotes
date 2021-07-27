import { Encryptable, Endecryptor } from '../models/encryptable.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';

export enum LoaderServices {
  note = 'notes',
  todo = 'todos',
}

@Injectable({
  providedIn: 'root',
})
export class DataLoadService<T extends Encryptable> {
  public loader_type: LoaderServices;

  constructor(private db: DatabaseService, public auth: AuthService) {}

  getAllData(): Observable<T[]> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loader_type)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decryptAll(e as T[])));
  }

  getData(did: string): Observable<T> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loader_type)
      .doc(did)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decrypt(e as T)));
  }

  async addData(data: T) {
    const d = Endecryptor.encrypt(data);

    const doc = await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loader_type)
      .add(d);

    d.id = doc.id;
    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loader_type)
      .doc(d.id)
      .set(d);

    return d.id;
  }

  async updateData(data: T) {
    const d = Endecryptor.encrypt(data);

    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loader_type)
      .doc(d.id)
      .set(d);

    return d.id;
  }
}
