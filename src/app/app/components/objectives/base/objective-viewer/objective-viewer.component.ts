import { Component, Input, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ObjectiveModel } from 'src/app/app/models/objectives/objective.model';
import { DataLoadService } from 'src/app/app/services/data-load.service';
import { AuthService } from 'src/app/libraries/authentication/services/auth.service';
import { LoadService } from 'src/app/libraries/loading/services/load.service';

@Component({
  selector: 'objective-viewer',
  templateUrl: './objective-viewer.component.html',
  styleUrls: ['./objective-viewer.component.scss'],
})
export class ObjectiveViewerComponent<T extends ObjectiveModel>
  implements OnInit
{
  objective: T;

  wasSaveAborted: boolean;

  @Input() loaderType;

  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    public loadService: DataLoadService<T>,
    public loader: LoadService
  ) {}

  ngOnInit(): void {
    this.loader.load();
    this.loadService.loaderType = this.loaderType;

    this.auth.sub_userData(async (data) => {
      if (data) {
        this.loadService
          .getData(this.route.snapshot.params['oid'])
          .subscribe((objective) => {
            this.objective = objective;

            this.loader.unload();
          });
      }
    }, true);
  }

  async save() {
    if (this.loader.finished('save')) {
      this.loader.load('save');

      await this.loadService.updateData(this.objective);

      this.loader.unload('save');

      if (this.wasSaveAborted) {
        this.save();
        this.wasSaveAborted = false;
      }
    } else {
      this.wasSaveAborted = true;
    }
  }
}
