import { map, take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ObjectiveModel } from 'src/app/app/models/objectives/objective.model';
import { LoaderServices } from 'src/app/app/services/data-load.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';
import { GlobalVariablesService } from 'src/app/libraries/util/services/global-variables.service';
import { DatabaseService } from 'src/app/libraries/util/services/database.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { Endecryptor } from 'src/app/app/models/encryptable.model';

@Component({
  selector: 'objective-add-existing-dialog',
  templateUrl: './objective-add-existing-dialog.component.html',
  styleUrls: ['./objective-add-existing-dialog.component.scss'],
})
export class ObjectiveAddExistingDialogComponent implements OnInit {
  loaderTypes: string[];
  loaderType: LoaderServices = null;

  searchQuery: string = '';
  searchResult: ObjectiveModel[];

  wasSaveAborted: boolean;

  constructor(
    public gv: GlobalVariablesService,
    public loader: LoadService,
    private db: DatabaseService,
    private auth: AuthService
  ) {
    this.loaderTypes = Object.values(gv.LoaderServices).filter(
      (el) => el != gv.LoaderServices.board
    );
  }

  ngOnInit(): void {
    this.auth.sub_userData((data) => {
      this.search();
    });
  }

  async search() {
    if (this.loader.finished('search')) {
      this.loader.load('search');

      let searchResult = [];
      if (this.loaderType) {
        searchResult = searchResult.concat(
          await this.searchLoaderType(this.loaderType as LoaderServices)
        );
      } else {
        console.log(this.loaderTypes);

        for (const loaderType of this.loaderTypes) {
          searchResult = searchResult.concat(
            await this.searchLoaderType(loaderType as LoaderServices)
          );
        }
      }

      this.searchResult = searchResult.filter((obj) =>
        obj.title.includes(this.searchQuery)
      );

      this.loader.unload('search');

      if (this.wasSaveAborted) {
        this.search();
        this.wasSaveAborted = false;
      }
    } else {
      this.wasSaveAborted = true;
    }
  }

  async searchLoaderType(loaderType: LoaderServices) {
    return await this.db.col_usersData
      .doc(this.auth.userData.uid)
      .collection(loaderType, (ref) => ref.orderBy('title').limit(10))
      .valueChanges()
      .pipe(
        take(1),
        map((e) => Endecryptor.decryptAll(e as ObjectiveModel[]))
      )
      .toPromise();
  }
}
