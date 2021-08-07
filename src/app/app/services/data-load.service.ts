import { Endecryptor } from '../models/encryptable.model';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { ObjectiveModel } from '../models/objectives/objective.model';

export enum LoaderServices {
  note = 'notes',
  todo = 'todos',
  board = 'boards',
}

@Injectable({
  providedIn: 'root',
})
export class DataLoadService<T extends ObjectiveModel> {
  public loaderType: LoaderServices;

  constructor(private db: DatabaseService, public auth: AuthService) {}

  getAllData(): Observable<T[]> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loaderType)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decryptAll(e as T[])));
  }

  getData(did: string): Observable<T> {
    return this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loaderType)
      .doc(did)
      .valueChanges()
      .pipe(map((e) => Endecryptor.decrypt(e as T)));
  }

  async addData(data: T) {
    const d = Endecryptor.encrypt(data);

    const doc = await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loaderType)
      .add(d);

    d.id = doc.id;
    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loaderType)
      .doc(d.id)
      .set(d);

    return d.id;
  }

  async updateData(data: T) {
    const d = Endecryptor.encrypt(data);

    await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(this.loaderType)
      .doc(d.id)
      .set(d);

    return d.id;
  }
}

export const DataLoadServiceProvider: Provider = {
  provide: DataLoadService,
  useFactory: (db, auth) => new DataLoadService(db, auth),
  deps: [DatabaseService, AuthService],
};
